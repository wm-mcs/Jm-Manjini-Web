<section id="blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">Blog</h2>
            <hr class="my-4">
            
          </div>
        </div>

      </div>
      <div class="get_width_100 flex-row-column">
         <div class="contenedor-listado-noticias">

          @foreach($Noticias as $Noticia)
          
           <div class="contiene-noticia-lista-show">
            <a class="get_width_100" href="{{$Noticia->route}}"> <img data-src="{{$Noticia->url_img_portada_chica}}" class="noticia-lista-show-img"> </a>

            <div class="noticia-sub-contenedor">
              <a  href="{{$Noticia->route}}"> <div class="noticia-lista-show-titulo">{{$Noticia->name}}</div>
              </a>  
              <div class="noticia-lista-show-fecha">
                {{$Noticia->fecha}}
              </div>

              <a href="{{$Noticia->route}}" class="noticia-leer-mas">
                Leer más
              </a>
            </div>
            

          </div>
         

          @endforeach


         

        </div>
        <br>
        <br>
         <a class="btn btn-primary btn-xl  Slider_cabecera_boton_contacto" href="{{route('get_pagina_noticias_listado')}}">Ver todas</a>
      </div>
       
       
      
</section>