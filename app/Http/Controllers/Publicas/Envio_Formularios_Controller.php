<?php

namespace App\Http\Controllers\Publicas;

use App\Helpers\HelpersGenerales;
use App\Http\Controllers\Controller;
use App\Managers\envio_contacto_manager;
use App\Repositorios\Emails\EmailsEspecificosDePaginasRepo;
use App\Repositorios\Emails\EmailsRepo;
use App\Repositorios\EmpresaRepo;
use Illuminate\Http\Request;

class Envio_Formularios_Controller extends Controller
{
    protected $EmpresaRepo;
    protected $EmailsRepo;
    protected $EmailsEspecificosDePaginasRepo;

    public function __construct(EmpresaRepo $EmpresaRepo,
        EmailsRepo $EmailsRepo,
        EmailsEspecificosDePaginasRepo $EmailsEspecificosDePaginasRepo) {

        $this->EmpresaRepo                    = $EmpresaRepo;
        $this->EmailsRepo                     = $EmailsRepo;
        $this->EmailsEspecificosDePaginasRepo = $EmailsEspecificosDePaginasRepo;
    }

    public function post_contacto_form(Request $Request)
    {

        $Nombre_de_empresa = $this->EmpresaRepo->getEmpresaDatos()->name;
        //valores del request
        $name               = $Request->get('name');
        $email              = $Request->get('email');
        $mensaje            = $Request->get('message');
        $Email_al_que_envia = $this->EmpresaRepo->getEmpresaDatos()->email;
        $Titulo_de_email    = 'Solicitud de contacto por web de ' . $name;
        $manager            = new envio_contacto_manager(null, $Request->all());

        $Validacion = $manager->isValid();

        if ($Validacion == true) {
            $this->EmailsRepo->EnvioEmailDeContacto($name, $email, $mensaje, $Email_al_que_envia, $Nombre_de_empresa, $Titulo_de_email, $Request);

            return HelpersGenerales::formateResponseToVue(true, 'Mensaje enviado correctamente. En breve te estarmos respondiendo a ' . $email);
        } else {

            return HelpersGenerales::formateResponseToVue(false, 'Upssssss! algo está mal', $manager->getErrors());
        }
    }

    public function post_envio_solicitud_trabajo_form(Request $Request)
    {

        $entidad = '';
        $manager = new envio_solicitud_trabajo_manager($entidad, $Request->all());

        if ($manager->isValid()) {
            //envio el email de la solciitud de trabajo
            $this->EmailsEspecificosDePaginasRepo->EnviarEmailDeSolicitudDeTrabajo($Request);

            return redirect()->route('get_home')
                ->with('alert', 'Solicitud de trabajo enviada correctamente. En breve nos contactaremos con usted. ');
        }

        return redirect()->back()->withErrors($manager->getErrors())->withInput($manager->getData());
    }

    public function post_envio_solicitud_cotizacion_proyecto_form(Request $Request)
    {

        $entidad = '';
        $manager = new envio_solicitud_trabajo_manager($entidad, $Request->all());

        if ($manager->isValid()) {
            //envio el email de la solciitud de trabajo
            $this->EmailsEspecificosDePaginasRepo->EnviarEmailDeSolicitudDeCotizacion($Request);

            return redirect()->route('get_home')
                ->with('alert', 'Solicitud de cotización de proyecto enviada correctamente. En breve nos contactaremos con usted. ');
        }

        return redirect()->back()->withErrors($manager->getErrors())->withInput($manager->getData());
    }
}
