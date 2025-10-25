// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Filmoteka',
            link: [
                {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'}
            ]
        }
    },
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: ['~/assets/css/global.css'],
    modules: ['@nuxt/image'],
});
