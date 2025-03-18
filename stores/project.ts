import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
  state: () => ({
    file: null as File | null,
    thumbnail: null as File | null,
  }),
  actions: {
    setFile(file: File) {
      this.file = file;
    },
    clearFile() {
      this.file = null;
    },
    setThumbnail(file: File) {
      this.thumbnail = file;
    },
    clearThumbnail() {
      this.thumbnail = null;
    },
  },
});
