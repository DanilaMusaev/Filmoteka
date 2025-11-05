// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Filmoteka',
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
            ],
        },
    },
    imports: {
        dirs: ['~/types/**'],
    },
    runtimeConfig: {
        public: {
            apiKey: '',
        },
    },
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    css: [
        '~/assets/css/global.css',
        'swiper/css',
        'swiper/css/navigation',
        'swiper/css/pagination',
    ],
    modules: ['@nuxt/image'],
});
