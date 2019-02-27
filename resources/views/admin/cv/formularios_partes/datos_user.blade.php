<div class="formulario-label-fiel">
  {!! Form::label('cv_text', 'CV', array('class' => 'formulario-label ')) !!}
  {!! Form::textarea('cv_text', null ,['class' => 'formulario-field',
                                           'cols'    => '14',
                                           'row'    => '14' ]) !!}
</div>






<div class="formulario-label-fiel">
{!! Form::label('img1', 'Imagen cv 1', array('class' => 'formulario-label ')) !!}
{!! Form::file('img1',['class' => 'formulario-field']) !!}   
</div>

<div class="formulario-label-fiel">
{!! Form::label('img2', 'Imagen cv 2', array('class' => 'formulario-label ')) !!}
{!! Form::file('img2',['class' => 'formulario-field']) !!}   
</div>

<div class="formulario-label-fiel">
{!! Form::label('img3', 'Imagen cv 3', array('class' => 'formulario-label ')) !!}
{!! Form::file('img3',['class' => 'formulario-field']) !!}   
</div>

<div class="formulario-label-fiel">
{!! Form::label('img4', 'Imagen cv 4', array('class' => 'formulario-label ')) !!}
{!! Form::file('img4',['class' => 'formulario-field']) !!}   
</div>

<div class="flex-row-column get_width_100" >
  <img class="admin-img-section-img" src="{{$Empresa->img_cv_patch}}1.jpg">
  <img class="admin-img-section-img" src="{{$Empresa->img_cv_patch}}2.jpg">
  <img class="admin-img-section-img" src="{{$Empresa->img_cv_patch}}3.jpg">
  <img class="admin-img-section-img" src="{{$Empresa->img_cv_patch}}4.jpg">
</div>



