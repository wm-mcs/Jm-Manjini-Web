<?php 

//Ruta de Home Panel Admin
Route::get('get_admin_home',
[
  'uses'  => 'Admin_Empresa\AdminController@get_admin_home',
  'as'    => 'get_admin_home'
]);