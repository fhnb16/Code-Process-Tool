<template>
  <div class="editor-container h-full">
    <!-- Редактор кода -->
    <VAceEditor
      v-model:value="editorStore.code"
      :lang="editorStore.selectedMode"
      :theme="theme"
      :options="editorOptions"
      class="lg:h-full h-96 w-full"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useEditorStore } from '../stores/editorStore';
import { VAceEditor } from 'vue3-ace-editor';

import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/theme-cobalt';
import 'ace-builds/src-noconflict/ext-searchbox';

export default defineComponent({
  name: 'CodeEditor',
  components: {
    VAceEditor,
  },
  setup() {
    const editorStore = useEditorStore();

    const theme = 'cobalt';
    const editorOptions = {
      useWorker: false,
      showPrintMargin: false,
      tabSize: 4,
      fontSize: 14,
    };

    return {
      editorStore,
      theme,
      editorOptions,
    };
  },
});
</script>

<style>
.editor-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
