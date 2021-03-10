import React from 'react';
import Item from './item';

const sectionHome1 = () => (
  <div className="w-100 py-4 ">
    <div className="container">
      <div className="row   ">
        <div className="col-12 d-flex flex-column align-items-center my-3 ">
          <h2 className="mb-5 text-center text-wrap">
            Soy especialista en tratar adolecentes y adultos que estén con
            alguno de estos problemas ...
          </h2>
        </div>

        <Item
          abierto={false}
          name="Ataques de pánico"
          description="Los síntomas más comunes son: el corazón late rápidamente (taquicardia), sudoración y puede llegar a sentir como si se estuviera por morir o volverse loco/a, desasosiego, y mucho miedo de que se vuelva a repetir. Los ataques pueden ocurrir en momentos inesperados sin ningún factor desencadenante obvio. "
        />
        <Item
          abierto={false}
          name="Depresión"
          description="La depresión se presenta como un conjunto de síntomas de predominio afectivo, puede estar presente la tristeza, así como también puede sentirse apatía, desesperanza, decaimiento, irritabilidad, sensación de malestar y puede llegar a sentir que el peso de la vida es muy fuerte para cargarla. Aunque, no siempre, pero pueden aparecer síntomas de tipo somático."
        />
        <Item
          abierto={false}
          name="Trastorno borderline"
          description="El trastorno límite de la personalidad es un trastorno de la salud mental que impacta la forma en que piensas y sientes acerca de ti mismo y de los demás, causando problemas para insertarte normalmente en la vida cotidiana. Variabilidad en las emociones, sentimiento sostenido en el tiempo de vacío, catarata de emociones que inundan y no podemos controlar."
        />
        <Item
          abierto={false}
          name="Inseguridad"
          description="Supone una falta de seguridad y de confianza en uno mismo relacionada con una autopercepción a menudo negativa personal en la que no se confía en las propias capacidades, en los propios criterios para tomar decisiones ni en sus habilidades ya que en ocasiones anteriores pudieron no ser las mejores."
        />
        <Item
          abierto={false}
          name="Separación"
          description="La separación de una pareja es una situación de crisis y tensión que afecta a toda la familia, por lo tanto, la guía de un profesional en el tema, resulta fundamental para disminuir el daño del sistema familiar completo."
        />
        <Item
          abierto={false}
          name="Indecisión"
          description="La indecisión es la falta de determinación ante una situación, vivida como conflictiva, que nos impide tomar una decisión. Se puede formular como la dificultad para tomar decisiones de forma afirmativa, segura y tranquila. Puede ser un rasgo de la personalidad en sí mismo, o puede ir asociado a algunos tipos de psicopatología, como los trastornos obsesivos."
        />
        <Item
          abierto={false}
          name="Duelo"
          description="El Duelo es un proceso interno que se produce ante la pérdida de un ser querido, pero también tenemos procesos de duelo en lo relativo a la perdida de una relación afectiva, sea del tipo que sea, pudiendo ir desde la pérdida de un trabajo, un cambio de residencia (Mudanza), la ruptura de una relación de pareja."
        />

        <Item
          abierto={false}
          name="Ansiedad"
          description="La ansiedad es una reacción humana natural que afecta a la mente y al cuerpo. Tiene una importante función básica de supervivencia: la ansiedad es un sistema de alarma que se activa cuando una persona percibe un peligro o una amenaza. El problema no es la ansiedad en sí misma, sino cuando este mecanismo se activa sin que haga falta, por ejemplo, ponerse o sentirse ansioso por cuestiones futuras que tal vez no lleguen a darse nunca y por ende quedamos detenidos por pensamientos irreales."
        />
      </div>
    </div>
  </div>
);

export default sectionHome1;
