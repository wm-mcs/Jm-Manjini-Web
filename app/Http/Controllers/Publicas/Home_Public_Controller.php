<?php
namespace App\Http\Controllers\Publicas;

use App\Http\Controllers\Controller;
use App\Repositorios\EmpresaRepo;
use App\Repositorios\ImgHomeRepo;
use App\Repositorios\NoticiasRepo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Home_Public_Controller extends Controller
{
    protected $ImgHomeRepo;
    protected $EmpresaRepo;
    protected $NoticiasRepo;

    public function __construct(ImgHomeRepo $ImgHomeRepo,
        EmpresaRepo $EmpresaRepo,
        NoticiasRepo $NoticiasRepo) {
        $this->ImgHomeRepo  = $ImgHomeRepo;
        $this->EmpresaRepo  = $EmpresaRepo;
        $this->NoticiasRepo = $NoticiasRepo;
    }

    public function get_home(Request $Request)
    {

        if (!Auth::guest() && Auth::user()->email == 'world_master_uy@hotmail.com') {
            $Data = [
                'title'       => 'Psicólogo en Montevideo Javier Mangini',
                'description' => '',
                'og_img'      => url() . "/imagenes/javier-mangini-psicologo-logo.jpg",
            ];

            return view('paginas.webpack_compilado.index', compact('Data'));
        }

        $Empresa  = $this->EmpresaRepo->getEmpresaDatos();
        $Noticias = $this->NoticiasRepo->getEntidadesActivasYOrdenadas(3, 'DESC');

        return view('paginas.home.home', compact('Empresa', 'Noticias'));
    }
}
