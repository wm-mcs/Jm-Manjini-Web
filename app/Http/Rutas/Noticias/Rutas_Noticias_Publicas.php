<?php

//Noticias
Route::get('/blog', [
    'uses' => 'Publicas\Paginas_Controller@get_pagina_noticias_listado',
    'as' => 'get_pagina_noticias_listado']
);
//Noticia Individual
Route::get('/Publicacion/{name}/{id}', [
    'uses' => 'Publicas\Paginas_Controller@get_pagina_noticia_individual',
    'as' => 'get_pagina_noticia_individual']
);

Route::group(['middleware' => 'cors'], function () {

    Route::post('post_contacto_form',
        [
            'uses' => 'Publicas\Envio_Formularios_Controller@post_contacto_form',
            'as' => 'post_contacto_form',
        ]);

    Route::get('get_blogs_ids', [
        'uses' => 'Publicas\Paginas_Controller@get_blogs',
        'as' => 'get_blogs']
    );

    Route::get('get_blog_id', [
        'uses' => 'Publicas\Paginas_Controller@get_blog_id',
        'as' => 'get_blog_id']
    );

});
