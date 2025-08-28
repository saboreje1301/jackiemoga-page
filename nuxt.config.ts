export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/seo'
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    tokkoBrokerUrl: process.env.TOKKO_BROKER_URL,
    tokkoBrokerApiKey: process.env.TOKKO_BROKER_API_KEY,
    tokkoBrokerId: process.env.TOKKO_BROKER_ID
  },
  app: {
    head: {
      title: 'Jackie Moga Real Estate',
      meta: [
        { name: 'description', content: 'Premium real estate properties in San Miguel de Allende' },
        { name: 'keywords', content: 'real estate, San Miguel de Allende, luxury homes, properties for sale, properties for rent' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
