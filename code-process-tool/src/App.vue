<script>
import { useEditorStore } from './stores/editorStore.js';
import CodeEditor from './components/CodeEditor.vue';
import LanguageSelector from './components/LanguageSelector.vue';
import { authKey } from './assets/credintals.js';

export default {
  components: { CodeEditor, LanguageSelector },
  setup() {
    const editorStore = useEditorStore();

    const runCode = async () => {
      // Request to backend api
      try {
        const url = 'https://onecompiler-apis.p.rapidapi.com/api/v1/run';
        var langExt = '';
        switch (editorStore.selectedLanguage) {
          case 'python':
            langExt = '.py';
            break;
          case 'php':
            langExt = '.php';
            break;
          case 'javascript':
            langExt = '.js';
            break;
          case 'go':
            langExt = '.go';
            break;
        }
        const options = {
          method: 'POST',
          headers: {
            'x-rapidapi-key': authKey,
            'x-rapidapi-host': 'onecompiler-apis.p.rapidapi.com',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            language: editorStore.selectedLanguage,
            files: [
              {
                name: 'index' + langExt,
                content: editorStore.code,
              },
            ],
          }),
        };
        console.log(options);
        const response = await fetch(url, options);

        const data = await response.json();

        if (response.ok) {
          if (data.stderr == null) {
            editorStore.setOutput(data.stdout);
            editorStore.setError('');
          } else {
            editorStore.setOutput(data.exception);
            editorStore.setError(data.stderr);
          }
        } else {
          throw new Error(data.error || 'Ошибка выполнения');
        }
      } catch (error) {
        editorStore.setError(error.message);
        editorStore.setOutput('');
      }
    };

    return { editorStore, runCode };
  },
};
</script>

<template>
  <div class="h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-sky-950 text-white p-2 flex justify-between items-center">
      <h1 class="text-xl font-bold">Code Runner</h1>
      <div class="flex items-center space-x-4">
        <LanguageSelector />
        <button
          class="bg-blue-600 hover:bg-blue-400 active:bg-blue-800 text-white px-6 py-2 rounded"
          @click="runCode"
        >
          Run
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <div class="flex-1 overflow-hidden flex flex-col lg:flex-row">
      <!-- Left Column: Code Editor -->
      <div class="lg:w-2/3 w-full">
        <CodeEditor />
      </div>

      <!-- Right Column: Description and Output -->
      <div
        class="lg:w-1/3 w-full bg-sky-950 p-4 overflow-y-auto flex lg:flex-col flex-col-reverse space-y-4 flex-1"
      >
        <div class="bg-gray-800 shadow p-4 rounded">
          <h2 class="text-lg text-gray-200 font-semibold">About Code Runner</h2>
          <p class="text-sm text-gray-400">
            This is a simplified code editor where you can write and run code in different
            languages. Select a language from the dropdown, write your code, and press "Run" to see
            the result! <br />
            Api by onecompiler.com
          </p>
        </div>
        <br />
        <div class="bg-gray-800 shadow p-4 rounded flex-1 overflow-auto">
          <h2 class="text-lg text-gray-200 font-semibold">Output</h2>
          <code class="mt-2 py-2 text-gray-400 rounded overflow-x-auto whitespace-pre">
            {{ editorStore.output }}
          </code>
          <span class="text-red-400">{{ editorStore.error }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
</style>
