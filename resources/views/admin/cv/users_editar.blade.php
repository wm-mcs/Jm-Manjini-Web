@extends('layouts.admin_layout.admin_layout')


@section('miga-de-pan')

  
  <span>Editar Cv</span>
@stop



@section('content')





 {{-- formulario --}}
  {!! Form::model($Empresa,   ['route' => ['set_admin_users_editar',$user->id],
                            'method'=> 'patch',
                            'files' =>  true,
                            'id'    => 'form-admin-empresa-datos'
                          ])               !!}
   <div class="formulario-contenedor">

      {{-- datos corporativos --}}
      <div class="contenedor-grupo-datos">
        <div class="contenedor-grupo-datos-titulo"><span class="icon-person"></span> Identidad</div>
        <div class="contenedor-formulario-label-fiel">                       
          @include('admin.cv.formularios_partes.datos_user')
        </div>
      </div>

      

      

      
   </div>
   <div class="admin-boton-editar">
     Editar
   </div> 


  {!! Form::close() !!}


  

  
@stop