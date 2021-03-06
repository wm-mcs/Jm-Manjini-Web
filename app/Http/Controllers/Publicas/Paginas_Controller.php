<?php

namespace App\Http\Controllers\Publicas;

use App\Helpers\HelpersGenerales;
use App\Http\Controllers\Controller;
use App\Repositorios\EmpresaRepo;
use App\Repositorios\ImgHomeRepo;
use App\Repositorios\MarcaRepo;
use App\Repositorios\Marca_de_eventoRepo;
use App\Repositorios\NoticiasRepo;
use App\Repositorios\ProyectoRepo;
use Illuminate\Http\Request;

class Paginas_Controller extends Controller
{
    protected $ImgHomeRepo;
    protected $ProyectoRepo;
    protected $NoticiasRepo;
    protected $EmpresaRepo;
    protected $MarcaRepo;
    protected $EventoRepo;
    protected $Marca_de_eventoRepo;

    public function __construct(ImgHomeRepo $ImgHomeRepo,
        ProyectoRepo $ProyectoRepo,
        NoticiasRepo $NoticiasRepo,
        EmpresaRepo $EmpresaRepo,
        MarcaRepo $MarcaRepo,
        Marca_de_eventoRepo $Marca_de_eventoRepo) {
        $this->ProyectoRepo        = $ProyectoRepo;
        $this->ImgHomeRepo         = $ImgHomeRepo;
        $this->NoticiasRepo        = $NoticiasRepo;
        $this->EmpresaRepo         = $EmpresaRepo;
        $this->MarcaRepo           = $MarcaRepo;
        $this->Marca_de_eventoRepo = $Marca_de_eventoRepo;
    }

    //Contacto
    public function get_pagina_contacto()
    {
        $Data = [
            'title'       => '¿Hablamos? llamame cuando quieras',
            'description' => 'Te podés contactar conmigo de tres maneras diferentes: 1- Llamándome, 2- Por Whatsapp y 3- por email.',
            'og_img'      => url() . "/imagenes/javier-mangini-psicologo-logo.jpg",
        ];

        return view('paginas.webpack_compilado.index', compact('Data'));
    }

    public function get_pagina_sobre_mi()
    {
        $Data = [
            'title'       => 'Sobre Javier Mangini',
            'description' => 'Lo que necesitás saber de mí para que puedas contactarme con el fin de ser tu psicólogo terapeuta.',
            'og_img'      => url() . "/imagenes/javier-mangini-psicologo-logo.jpg",
        ];

        return view('paginas.webpack_compilado.index', compact('Data'));
    }

    //pagina donde estan las marcas
    public function get_pagina_marcas(Request $Request)
    {
        $Marcas          = $this->MarcaRepo->getMarcasParaWebOrdenadasAlfabeticamente($Request, 20);
        $Marcas_buscador = $this->MarcaRepo->getMarcasParaWebOrdenadasAlfabeticamenteSinPaginacion();

        $Marca = '';

        if ($Request->get('select_marcas_id') != '' && ($Request->get('select_marcas_id') != null)) {
            $Marca = $this->MarcaRepo->find($Request->get('select_marcas_id'));

            //redireccion a la pagina de eventos de esa Marca

            return redirect($Marca->route);
        }

        //consultar todas rango altorandom
        $MarcasRango3 = $this->MarcaRepo->getMarcasDesordenadasRandomSegunRank(3, null);
        $MarcasRango2 = $this->MarcaRepo->getMarcasDesordenadasRandomSegunRank(2, null);
        $MarcasRango1 = $this->MarcaRepo->getMarcasDesordenadasRandomSegunRank(1, null);

        return view('paginas.marcas.marcas', compact('MarcasRango3', 'MarcasRango2', 'MarcasRango1', 'Marcas', 'Marca', 'Marcas_buscador'));
    }

    //pagina de la marca individual
    public function get_pagina_marca_individual($name, $id, Request $Request)
    {
        $Marca = $this->MarcaRepo->find($id);

        //le envio los eventos de esa marca
        $Eventos_id = $this->Marca_de_eventoRepo->getEventosDeEstaMarcaActivosYPaginados('marca_id', $id, 'desc', 10, $Request);

        $Eventos = $this->EventoRepo->getEventosArrayDeEventosID($Eventos_id, 10);

        $Empresa = $this->EmpresaRepo->getEmpresaDatos();

        return view('paginas.marcas.marca_individual', compact('Marca', 'Eventos', 'Empresa'));
    }

    //Empresa
    public function get_pagina_empresa()
    {
        $Empresa = $this->EmpresaRepo->getEmpresaDatos();

        return view('paginas.empresa.empresa', compact('Empresa'));
    }

    //servicios
    public function get_pagina_servicios()
    {
        return view('paginas.servicios.servicios');
    }

    //Noticias
    public function get_pagina_noticias_listado(Request $Request)
    {
        $Data = [
            'title'       => 'Blog',
            'description' => 'El blod de psciología que te ayuda a resolver conflictos.',
            'og_img'      => url() . "/imagenes/javier-mangini-psicologo-logo.jpg",
        ];

        return view('paginas.webpack_compilado.index', compact('Data'));
    }

    //Noticias Individual
    public function get_pagina_noticia_individual($name, $id)
    {

        $Blog = $this->NoticiasRepo->find($id);

        $Data = [
            'title'       => $Blog->name,
            'description' => '',
            'og_img'      => url() . "/imagenes/javier-mangini-psicologo-logo.jpg",
        ];

        return view('paginas.webpack_compilado.index', compact('Data'));
    }

    public function get_blogs(Request $Request)
    {
        $arrayConsulta = [
            [
                'where_tipo' => 'where',
                'key'        => 'estado',
                'value'      => 'si',
            ],
        ];
        $Ids      = $Request->get('ids');
        $Cantidad = $Request->get('cantidad');

        if ($Ids == '') {
            $Ids = [];
        } else {
            $Ids = array_values(explode(',', $Ids));
        }

        $Blogs = $this->NoticiasRepo->getEntidadesMenosIdsYConFiltros($arrayConsulta, $Ids, $Cantidad, 'created_at', 'DESC');

        return HelpersGenerales::formateResponseToVue(true, 'Se cargaron los blogs bien.', $Blogs);
    }

    public function get_blog_id(Request $Request)
    {
        return HelpersGenerales::formateResponseToVue(true, 'Se cargó el blog', $this->NoticiasRepo->find($Request->get('id')));
    }

    //Proyectos
    public function get_pagina_proyecto_listado(Request $Request)
    {
        $Proyectos = $this->ProyectoRepo->getEntidadActivasPaginadas($Request, 3);

        return view('paginas.proyecto.proyecto_listado', compact('Proyectos'));
    }

    public function get_pagina_proyecto_individual($name, $id)
    {

        $Proyecto = $this->ProyectoRepo->find($id);

        return view('paginas.proyecto.proyecto_individual', compact('Proyecto'));
    }

    public function get_pagina_cv()
    {
        $Empresa = $this->EmpresaRepo->getEmpresaDatos();

        return view('paginas.cv.cv', compact('Empresa'));
    }
}
