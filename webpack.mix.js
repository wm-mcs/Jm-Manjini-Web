let mix = require('laravel-mix');

mix.combine(
  [
    './resources/assets/js/Template_creative/jquery.js',
    './resources/assets/js/Template_creative/bootstrap.bundle.js',
    './resources/assets/js/Customs/helper_generales.js',
    './resources/assets/js/Customs/admin_eventos.js',
  ],
  'public/build/js/admin.js'
);
mix.combine(
  [
    './resources/assets/js/Template_creative/jquery.js',
    './resources/assets/js/Template_creative/bootstrap.bundle.js',
    './resources/assets/js/Template_creative/jquery.easing.js',
    './resources/assets/js/Template_creative/scrollreveal.js',
    './resources/assets/js/Template_creative/jquery.magnific-popup.js',
    './resources/assets/js/Template_creative/creative.js',
    './resources/assets/js/Template_creative/jquery.easing.compatibility.js',
    './resources/assets/js/Plugins/Flickity.js',
    './resources/assets/js/Plugins/Plug-lazyLoadXT.js',
    './resources/assets/js/Customs/sliders.js',
    './resources/assets/js/Customs/team.js',
    './resources/assets/js/Customs/noticias_blog.js',
  ],
  'public/build/js/public.js'
);

mix.sass('./resources/assets/sass/admin.scss', 'public/build/css/admin.css').options({
    processCssUrls: false
});
mix.sass(
  './resources/assets/sass/creative_template_mixer.scss',
  'public/build/css/public.css'
).options({
    processCssUrls: false
});
