<?php 

//Ruta de Home Panel Admin
Route::get('get_cv',
[
  'uses'  => 'Admin_Empresa\Admin_Datos_Corporativos_Controller@get_cv',
  'as'    => 'get_cv'
]);



