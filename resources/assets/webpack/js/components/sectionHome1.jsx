import React from 'react';
import Item from './item';

const sectionHome1 = () => (
  <div className="w-100 py-4 ">
    <div className="container">
      <div className="row   ">
        <div className="col-12 d-flex flex-column align-items-center my-3 ">
          <h2 className="mb-5 text-center decoracionHeaders">
            Soy especialista en tratar niños y adultos que estén con alguno de
            estos problemas ...
          </h2>
        </div>

        <Item
          abierto={false}
          name="Ataques de pánico"
          description="¿El corazón le late rápidamente, comienza a sudar y siente como si no pudiera respirar o pensar?  ¿Estos ataques ocurren en momentos impredecibles sin ningún factor desencadenante obvio, llenándole de inquietud de que pudiera tener otro en cualquier momento?"
        />
        <Item
          abierto={false}
          name="Depresión"
          description="La depresión se presenta como un conjunto de síntomas de predominio afectivo (tristeza patológica, apatía, anhedonia, desesperanza, decaimiento, irritabilidad, sensación subjetiva de malestar e impotencia frente a las exigencias de la vida) aunque, en mayor o menor grado, también están presentes síntomas de tipo cognitivo, volitivo y somático, por lo que podría hablarse de una afectación global psíquica y física, haciendo especial énfasis en la esfera afectiva"
        />
        <Item
          abierto={false}
          name="Trastorno borderline"
          description="El trastorno límite de la personalidad es un trastorno de la salud mental que impacta la forma en que piensas y sientes acerca de ti mismo y de los demás, causando problemas para insertarte normalmente en la vida cotidiana. Incluye problemas de autoimagen, dificultad para manejar las emociones y el comportamiento, y un patrón de relaciones inestables."
        />
        <Item
          abierto={false}
          name="Inseguridad"
          description="La inseguridad es una reacción emocional acompañada de malestar y tensión que se presenta en diversas situaciones, generalmente asociada a situaciones de ámbito social y en la toma de decisiones.

Supone una falta de seguridad y de confianza en uno mismo relacionada con una autopercepción negativa personal en la que no se confía en las propias capacidades, en los propios criterios para tomar decisiones ni en sus habilidades tanto sociales como competenciales.
"
        />
        <Item
          abierto={false}
          name="Separación"
          description="La separación de una pareja es una situación de crisis y tensión que afecta a toda la familia"
        />
        <Item
          abierto={false}
          name="Indecisión"
          description="La indecisión es la falta de determinación ante una situación, vivida como conflictiva, que nos impide tomar una decisión. Se puede formular como la dificultad para tomar decisiones de forma afirmativa, segura y tranquila. Puede ser un rasgo de la personalidad en sí mismo, o puede ir asociado a algunos tipos de psicopatología, como los trastornos obsesivos."
        />
        <Item
          abierto={false}
          name="Duelo"
          description="El Duelo es un proceso interno que se produce ante la pérdida de una relación afectiva, sea del tipo que sea, pudiendo ir desde la pérdida de un trabajo, un cambio de residencia, la ruptura de una relación de pareja hasta la muerte de un ser querido."
        />

        <Item
          abierto={false}
          name="Ansiedad"
          description="La ansiedad es una reacción humana natural que afecta a la mente y al cuerpo. Tiene una importante función básica de supervivencia: la ansiedad es un sistema de alarma que se activa cuando una persona percibe un peligro o una amenaza."
        />
      </div>
    </div>
  </div>
);

export default sectionHome1;
