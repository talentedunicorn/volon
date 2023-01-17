import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => {
    return {
      asideActive: true,
      markdownPreviewActive: true,
    };
  },
  actions: {
    toggleAsideActive() {
      this.asideActive = !this.asideActive;
    },
    setAsideActive(newValue: boolean) {
      this.asideActive = newValue;
    },
    toggleMarkdownPreviewActive() {
      this.markdownPreviewActive = !this.markdownPreviewActive;
    },
    setMarkdownPreviewActive(newValue: boolean) {
      this.markdownPreviewActive = newValue;
    },
  },
});
