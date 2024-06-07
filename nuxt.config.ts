// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@sidebase/nuxt-auth", '@nuxtjs/tailwindcss', "@nuxtjs/seo", '@vee-validate/nuxt'],
  // SEO module configuration
  site: {
    url: process.env.SITE_URL || 'http://localhost:3000',
    name: 'Boilerplate Nuxt App',
    description: 'A boilerplate Nuxt app with TypeScript, Tailwind CSS, and SEO support.',
    defaultLocale: 'en',
  },

  linkChecker: {
    enabled: false
  },

  seoExperiments: {
    enabled: false
  },

  auth: {
    isEnabled: true,
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: {
      isEnabled: false,
    }
  },

  // VeeValidate module configuration
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
})