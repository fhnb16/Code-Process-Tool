import { defineStore } from 'pinia';

export const useEditorStore = defineStore('editor', {
    state: () => ({
        selectedLanguage: 'python', // Current language
        selectedMode: 'python', // Current ace highlight mode
        code: '', // variable for code in ace
        output: '', // output with result of execution
        error: '', // error message
    }),

    actions: {
        setLanguage(language) {
            this.selectedLanguage = language;
        },
        setCode(newCode) {
            this.code = newCode;
        },
        setOutput(result) {
            this.output = result;
        },
        setError(error) {
            this.error = error;
        },
    },
});