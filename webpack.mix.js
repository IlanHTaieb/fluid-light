const mix = require('laravel-mix');

mix
  .options({processCssUrls: false})
  .sass('src/sass/app.sass', 'public/css')
  .js('src/js/app', 'public/js')
