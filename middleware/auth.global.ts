// middleware/auth.js
export default defineNuxtRouteMiddleware(to => {
  const { isAuthenticated } = useSanctumAuth();
  // console.log(to.meta['auth'], 444);
  // console.log(isAuthenticated.value, 555);
  // if (to.meta.auth === 'guest' && isAuthenticated) {
  //   return navigateTo('/'); // 로그인된 경우 홈 페이지로 리디렉션
  // } else
  if (to.path.startsWith('/auth') || to.path.startsWith('/main')) {
    return; // 인증 미들웨어를 적용하지 않음
  }

  if (!isAuthenticated.value) {
    return navigateTo('/auth/login'); // 인증되지 않은 경우 로그인 페이지로 리디렉션
  }
});
