// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@sidebase/nuxt-auth", '@nuxtjs/tailwindcss', "@nuxtjs/seo", '@vee-validate/nuxt'],
  // SEO module configuration
  site: {
    url: process.env.SITE_URL || 'http://localhost:3030',
    name: 'Boilerplate Nuxt App',
    description: 'A boilerplate Nuxt app with TypeScript, Tailwind CSS, and SEO support.',
    defaultLocale: 'en',
  },
  devServer: {
    port: 3030
  },
  runtimeConfig: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    PASSWORD_HASH: process.env.PASSWORD_HASH,
    EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
    EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
    EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
    EMAIL_FROM: process.env.EMAIL_FROM,
    STRIPE_PRIVATE_KEY: process.env.STRIPE_PRIVATE_KEY,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    public: {
      SITE_URL: process.env.SITE_URL,
    }
  },

  linkChecker: {
    enabled: false
  },

  seoExperiments: {
    enabled: false
  },

  auth: {
    isEnabled: true,
    baseURL: process.env.BASE_URL || 'http://localhost:3030',
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