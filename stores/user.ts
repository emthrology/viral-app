import { defineStore } from 'pinia';

// UserData 인터페이스 선언
interface UserData {
  userInfo: any; // userInfo의 타입을 구체적으로 지정할 수 있습니다.
  token: string;
}

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
    login(userData: UserData) {
      this.isAuthenticated = true;
      this.userInfo = userData.userInfo;
      this.token = userData.token;
    },
    logout() {
      this.isAuthenticated = false;
      this.userInfo = null;
      this.token = '';
    },
  },
  persist: true,
});
