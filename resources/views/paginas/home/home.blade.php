@extends('layouts.creative.layout_creative')

@section('titulo') {{$Empresa->name}} @stop

@section('descripcion') {{$Empresa->descripcion_empresa}} @stop

@section('robot') index, follow @stop

@section('palabras_claves') {{$Empresa->palabras_claves_empresa}} @stop



@section('nav') @include('paginas.home.home_nav') @stop

@section('slider')  @include('paginas.home.slider') @stop

@section('contenido')
      @include('paginas.home.home_about') 
      {{-- @include('paginas.home.home_clientes') --}}

      <img data-src="{{url()}}/imagenes/Empresa/Portada/principal3.jpg" class="img-slider-size helper_max_width_100">
    
      @include('paginas.home.home_libro')  
      @include('paginas.home.home_blog')  
      <img data-src="{{url()}}/imagenes/Empresa/Portada/principal4.png" class="img-slider-size helper_max_width_100">
      {{-- @include('paginas.home.home_precios')
      @include('paginas.home.home_garantia') --}}
@stop      









