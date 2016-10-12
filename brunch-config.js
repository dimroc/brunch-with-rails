// See http://brunch.io for documentation.
exports.config = {
  files: {
    javascripts: {joinTo: 'javascripts/client.js'},
    stylesheets: {joinTo: 'stylesheets/client.css'},
    templates: {joinTo: 'javascripts/client.js'}
  },
  paths: {
    public: 'app/assets',
    watched: ['client']
  },
  plugins: {
    sass: {
      options: {
        includePaths: ["node_modules/bootstrap-sass/assets/stylesheets"], // tell sass-brunch where to look for files to @import
        precision: 8 // minimum precision required by bootstrap-sass
      }
    }
  },
  npm: {
    enabled: true,
    globals: {
      $: 'jquery',
      jQuery: 'jquery',
      bootstrap: 'bootstrap-sass' // require bootstrap-sass' JavaScript globally
    }
  }
};

