import './index';
import AnimatedLetters from '../AnimatedLetters/index.js';
import image from '../../assets/img/jb.JPG';

const About = () => {
  const aboutArray = ['A', 'c', 'e', 'r', 'c', 'a',' ','d','e',' ', 'm', 'i'];
  const letterClass = 'text-animate';

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          {' '}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={aboutArray}
            idx={15}
          />
        </h1>
        <p>
          Soy desarrollador Full Stack Web Developer con conocimiento en estas
          principales herramientas y tecnologías: JavaScript, NodeJS, Express,
          React, Redux, PostgreSQL , Sequelize, MongoDB , mongoose, JIRA.
        </p>
        <p>
          Ademas cuento con conocimiento en herramientas de diseño grafico
          (RDworks v8, CorelDRAW, SketchUp, AutoCad ) ya que trabaje como
          operador de maquinas de corte laser por 5 años.
        </p>
        <p>
          {' '}
          Me considero una persona responsable y con iniciativa que siempre está
          aprendiendo y avanzando. Tengo curiosidad por conocer nuevas formas de
          resolver problemas, un pensador curioso y analítico al que le gusta
          desafiarse a sí mismo. Dedicado a la hora de trabajar y con buena
          comunicación para realizar trabajos en equipo.
        </p>
      </div>
      <img src={image} className="img" alt="jb" />
    </div>
  );
};

export default About;
