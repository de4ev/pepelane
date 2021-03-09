export default {
    ssr: false,
    // mode: 'universal',
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',
    router: {
      base: '/projects/pepelane/'
    },
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
      title: 'pepelane',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  
    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '@/assets/css/main.scss',
    ],
  
    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
      {src: '@/plugins/nuxtClientInit.js', mode: 'client'}
    ],
  
    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,
  
    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
      // https://go.nuxtjs.dev/eslint
    ],
  
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
    ],
  
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
      loaders: {
        cssModules: {
          modules: {
            localIdentName: "[local]--[pepelane]_[hash:base64:4]",
          }
        }
      },
    },
  }
  