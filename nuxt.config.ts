// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'], // Pinia 관련 헬퍼 자동 임포트
      },
    ],
  ],
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
    '/': { redirect: '/login' },
  },
  compatibilityDate: '2024-11-01',
});
