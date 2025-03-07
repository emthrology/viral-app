import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    leftMenuToggle: false,
    rightMenuToggle: false,
  }),
  actions: {
    toggleLeftMenu() {
      this.leftMenuToggle = !this.leftMenuToggle;
    },
    toggleRightMenu() {
      this.rightMenuToggle = !this.rightMenuToggle;
    },
  },
});
