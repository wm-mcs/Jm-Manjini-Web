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
        $this->ImgHomeRepo = $ImgHomeRepo;
        $this->EmpresaRepo = $EmpresaRepo;
        $this->NoticiasRepo = $NoticiasRepo;

    }

    public function get_home(Request $Request)
    {

        $Empresa = $this->EmpresaRepo->getEmpresaDatos();
        $Noticias = $this->NoticiasRepo->getEntidadesActivasYOrdenadas(3, 'DESC');

        if (!Auth::guest() && Auth::user()->email == 'world_master_uy@hotmail.com') {
            return view('paginas.webpack_react_index');
        }

        return view('paginas.home.home', compact('Empresa', 'Noticias'));
    }

}
