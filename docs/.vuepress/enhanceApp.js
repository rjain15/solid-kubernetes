import VueTypedJs from 'vue-typed-js'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    // ...apply enhancements to the app
    if (typeof process === 'undefined') { // process is undefined in a browser         
      Vue.use(VueTypedJs)
    }
  }