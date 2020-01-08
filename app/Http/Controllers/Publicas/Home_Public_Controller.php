<?php
namespace App\Http\Controllers\Publicas;

use App\Http\Controllers\Controller;
use App\Repositorios\ImgHomeRepo;
use App\Repositorios\EmpresaRepo;
use Illuminate\Http\Request;
use App\Repositorios\NoticiasRepo;



class Home_Public_Controller extends Controller
{
    protected $ImgHomeRepo;
    protected $EmpresaRepo;
    protected $NoticiasRepo;
  

    public function __construct(ImgHomeRepo  $ImgHomeRepo,
                                EmpresaRepo  $EmpresaRepo, 
                                NoticiasRepo $NoticiasRepo)
    {
        $this->ImgHomeRepo  = $ImgHomeRepo;
        $this->EmpresaRepo  = $EmpresaRepo;
        $this->NoticiasRepo = $NoticiasRepo;
        
    }

    public function get_home(Request $Request)
    {
        
           
        $Empresa        = $this->EmpresaRepo->getEmpresaDatos(); 
        $Noticias       = $this->NoticiasRepo->getEntidadesActivasYOrdenadas(3,'DESC');

        return view('paginas.home.home', compact('Empresa','Noticias'));
    }


}
