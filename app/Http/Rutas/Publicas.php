<?php

require __DIR__ . '/Noticias/Rutas_Noticias_Publicas.php';

require __DIR__ . '/Formularios/Rutas_Formularios_Publicas.php';

require __DIR__ . '/CV/Ruta_Cv_Publica.php';

//Ruta de Home
Route::get('/', [
    'uses' => 'Publicas\Home_Public_Controller@get_home',
    'as'   => 'get_home']
);

//Contacto
Route::get('/contactar', [
    'uses' => 'Publicas\Paginas_Controller@get_pagina_contacto',
    'as'   => 'get_pagina_contacto']
);

Route::get('/sobre-mi', [
    'uses' => 'Publicas\Paginas_Controller@get_pagina_sobre_mi',
    'as'   => 'get_pagina_sobre_mi']
);

//Empresa
Route::get('/Empresa', [
    'uses' => 'Publicas\Paginas_Controller@get_pagina_empresa',
    'as'   => 'get_pagina_empresa']
);

//Servicios
Route::get('/Servicios', [
    'uses' => 'Publicas\Paginas_Controller@get_pagina_servicios',
    'as'   => 'get_pagina_servicios']
);
