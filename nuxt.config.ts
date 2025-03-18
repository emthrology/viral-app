export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase:
        process.env.NODE_ENV === 'development'
          ? process.env.NUXT_DEV_BASE
          : process.env.NUXT_API_BASE,
      youtubeApiKey: process.env.NUXT_YOUTUBE_API_KEY,
    },
  },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    'nuxt-auth-sanctum',
  ],
  sanctum: {
    baseUrl: 'http://localhost:8000/api', // Laravel API URL
    endpoints: {
      csrf: '/sanctum/csrf-cookie', // CSRF cookie 엔드포인트
      login: '/login', // 로그인 엔드포인트
      logout: '/logout', // 로그아웃 엔드포인트
      user: '/me', // 사용자 정보 엔드포인트
    },
    csrf: {
      cookie: 'XSRF-TOKEN', // CSRF 쿠키 이름
      header: 'X-XSRF-TOKEN', // CSRF 헤더 이름
    },
    redirect: {
      onLogin: '/myproject', // 로그인 후 리다이렉트할 URL
      onGuestOnly: '/myproject', // 인증이 필요하지 않은 페이지에 접근할 때 리다이렉트할 URL
      onAuthOnly: '/auth/login', // 인증이 필요한 페이지에 접근할 때 리다이렉트할 URL
    },
  },
  imports: {
    dirs: ['stores'],
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Viral - 바이럴',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable.css',
        },
      ],
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
        { name: 'title', content: 'Viral - 바이럴' },
        {
          property: 'og:title',
          content: 'Viral - 바이럴',
        },
        // {
        //   property: 'og:image',
        //   content: '/condemn.png'
        // },
        // { name:'naver-site-verification', content: "93e062b2e167c3ce8c814169a79eab78aae0bfe7"},
        // { name:"google-site-verification", content: "KJiuCWaTHznUSWdJDAiWFnMz7A8unrpcpEMrArae6T4" },
      ],
      script: [{ src: 'https://developers.kakao.com/sdk/js/kakao.min.js' }],
    },
  },
  css: ['@/assets/css/main.css'],
  // TODO 아래 지우고, middleware/auth.ts 설정한 후 root 페이지 vue (pages/index.vue)에 middleware 이용한 리다이렉트 처리 (로그인했으면 '/main', 로그인안했으면 '/login' 또는 '/welcome')
  routeRules: {
    '/': { redirect: '/main' },
  },
  compatibilityDate: '2024-11-01',
});
