<section id="blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">Artículos</h2>
            <hr class="my-4">
            <h4 class="text-muted mb-4">Ultimos aportes</h4>
          </div>
        </div>

      </div>
      <div class="get_width_100 flex-row-column">
         <div class="contenedor-listado-noticias">

          @foreach($Noticias as $Noticia)
          
            @include('paginas.noticias.noticias_lista_individual')   

          @endforeach

        </div>
      </div>
       
       
      
</section>