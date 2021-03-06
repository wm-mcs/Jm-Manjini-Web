<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        \Symfony\Component\HttpKernel\Exception\HttpException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $e
     * @return void
     */
    public function report(Exception $e)
    {
        return parent::report($e);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $e
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $e)
    {

        if ($this->isHttpException($e)) {
            switch ($e->getStatusCode()) {
                // not authorized
                case '403':
                    return response()->view('errors.403', array(), 403);
                    break;

                // not found
                case '404':
                    return redirect()->route('get_home');
                    break;

                // internal error
                case '500':
                    return response()->view('errors.500', array(), 500);
                    break;

                default:
                    return $this->renderHttpException($e);
                    break;
            }
        } else {

            if (app()->environment() == 'production') {
                return response()->view('errors.500', [], 500);
            }

            return parent::render($request, $e);
        }
    }
}
