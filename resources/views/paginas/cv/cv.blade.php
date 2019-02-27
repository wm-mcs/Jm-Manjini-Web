@extends('layouts.user_layout.user_layout')



@section('og-tags')
{{-- <meta property="og:title" content="Global Target">
     <meta property="og:description" content="Agencia de modelos, eventos y promociones.">
     <meta property="og:image" content="https://www.globaltarget.com.uy/thumbnail.jpg">
     <meta property="og:url" content="https://www.globaltarget.com.uy/"> --}}
@stop


@section('title')
      | {{$Empresa->name}}
@stop


@section('MetaContent')

@stop

@section('MetaRobot')

@stop

@section('palabras-claves')

@stop



@section('content')

<div  class="{{-- masthead --}} get_width_100 "  >
  
<div id="carouselExampleIndicators" class="carousel slide auto" data-ride="carousel" data-interval="5000">
 
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="post-img-slider-size Slider_cabecer_img" src="{{$Empresa->url_img_cv_portada}}" align="Cv de {{$Empresa->name}}"> 
     
    </div>
   
  </div>


      <div class="carousel-caption  Slider-Contendor d-md-block Helper-OrdenarHijos-Row">
        <div class="get_width_100 flex-row-center" style="min-height: 100vh;">
          <div class="get_width_100">
              <div class="col-lg-10 mx-auto">
                <h1 class="text-uppercase Slider_cabecera_caption_titulo text-color-black">
                  <strong>{{$Empresa->name}}</strong>
                </h1>
               </div>  
          </div>
        </div>
      </div>
      {{-- <img src="{{url()}}/imagenes/580b57fcd9996e24bc43c513.png" class="Slider_cabecera_caption_logo">   --}}
  

</div>
</div>

  


   <div class="contenedor-listado-noticias" id="contenido-noticia">  
    
       {{html_entity_decode($Empresa->contenido_render)}}

   </div>

  


@stop