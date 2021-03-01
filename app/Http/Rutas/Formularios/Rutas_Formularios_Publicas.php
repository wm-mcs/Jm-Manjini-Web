<?php

//Post Form Solciitud de Trabajo
Route::post('post_envio_solicitud_trabajo_form',
    [
        'uses' => 'Publicas\Envio_Formularios_Controller@post_envio_solicitud_trabajo_form',
        'as' => 'post_envio_solicitud_trabajo_form',
    ]);

//Post Form Solciitud de Proyecto
Route::post('post_envio_solicitud_cotizacion_proyecto_form',
    [
        'uses' => 'Publicas\Envio_Formularios_Controller@post_envio_solicitud_cotizacion_proyecto_form',
        'as' => 'post_envio_solicitud_cotizacion_proyecto_form',
    ]);
