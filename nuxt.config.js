module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/sass/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "@nuxtjs/style-resources"
  ],

  icon: {
    iconSrc: "./static/icon.png"
  },
  manifest: {
    short_name: "Basic PWA",
    name: "Basic Pwa Example",
    start_url: "/",
    theme_color: "#343A40"
  },
  workbox: {
    swDest: "static/sw.js",
    runtimeCaching: []
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    middleweare: ["routeChecker"]
  },
  styleResources: {
    scss: ["./assets/sass/*.scss"]
  },
  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: "1y",
      setHeaders(res, path) {
        if (path.includes("sw.js")) {
          res.setHeader("Cache-Control", `public, max-age=${15 * 60}`);
        }
      }
    }
  },
  /*generate: {
    routes: () => {
      let slugs = [
        { slug: "Giant" },
        { slug: "Giant1" },
        { slug: "Giant2" },
        { slug: "Giant3" },
        { slug: "Trek" },
        { slug: "Trek1" },
        { slug: "Trek2" },
        { slug: "Trek3" },
        { slug: "Scott" },
        { slug: "Scott1" },
        { slug: "Scott2" },
        { slug: "Scott3" },
        { slug: "Supreme" },
        { slug: "Supreme1" },
        { slug: "Supreme2" },
        { slug: "Supreme3" },
        { slug: "Jordans" },
        { slug: "Jordans1" },
        { slug: "Jordans2" },
        { slug: "Jordans3" },
        { slug: "Vans" },
        { slug: "Vans1" },
        { slug: "Vans2" },
        { slug: "Vans3" },
        { slug: "Rolex" },
        { slug: "Rolex1" },
        { slug: "Rolex2" },
        { slug: "Rolex3" },
        { slug: "Garmin" },
        { slug: "Garmin1" },
        { slug: "Garmin2" },
        { slug: "Garmin3" },
        { slug: "G-Shock" },
        { slug: "G-Shock1" },
        { slug: "G-Shock2" },
        { slug: "G-Shock3" }
      ];
      return slugs.map(elt => {
        return {
          route: `/${elt.slug}`
        };
      });
    }
  }*/
  server: {
    port: 5000
  }
};
