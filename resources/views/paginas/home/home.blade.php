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

      <img src="{{url()}}/imagenes/Empresa/Portada/principal3.jpg" class="img-slider-size">
    
      @include('paginas.home.home_libro')  
      <img src="{{url()}}/imagenes/Empresa/Portada/principal4.jpg" class="img-slider-size">
      {{-- @include('paginas.home.home_precios')
      @include('paginas.home.home_garantia') --}}
@stop      









