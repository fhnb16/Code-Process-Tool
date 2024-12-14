<template>
  <div class="flex justify-center items-center">
    <label for="language" class="block font-bold px-2">Select language:</label>
    <select
      id="language"
      v-model="editorStore.selectedLanguage"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="python">Python</option>
      <option value="go">Go</option>
      <option value="php">PHP</option>
      <option value="javascript">JS</option>
    </select>
  </div>
</template>

<script>
import { watch } from 'vue';
import { useEditorStore } from '../stores/editorStore';

export default {
  setup() {
    const editorStore = useEditorStore();

    // Watch for language change and change mode variable for ace
    watch(
      () => editorStore.selectedLanguage,
      (newLanguage) => {
        switch (newLanguage) {
          case 'go':
            editorStore.selectedMode = 'golang';
            break;
          default:
            editorStore.selectedMode = newLanguage;
        }
      },
    );

    return { editorStore };
  },
};
</script>
