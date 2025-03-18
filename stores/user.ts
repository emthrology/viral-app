import { defineStore } from 'pinia';

// UserData 인터페이스 선언

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    userInfo: null,
    token: '',
  }),
  actions: {
    test_login() {
      this.isAuthenticated = true;
    },
    setUserInfo(userData: any) {
      this.isAuthenticated = true;
      this.userInfo = userData;
      // this.token = userData.token;
    },
    clearUserInfo() {
      this.isAuthenticated = false;
      this.userInfo = null;
      this.token = '';
    },
  },
  persist: true,
});
