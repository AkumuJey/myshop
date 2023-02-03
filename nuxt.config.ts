// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'My Shop',
            meta: [
                {
                    name: 'description', content: 'Everything about my shop'
                }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
                }
            ]
        }
    }
})
