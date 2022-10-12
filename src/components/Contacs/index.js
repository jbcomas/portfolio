import AnimatedLetters from '../AnimatedLetters';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss';
const Contact = () => {
  const letterClass = 'text-animate';
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'default_service',
        'template_v8cgo8i',
        refForm.current,
        'jrjNSu0gVfDugZell'
      )
      .then(
        function (response) {
          alert('Mensaje Enviado')
          // console.log('SUCCESS!', response.status, response.text);
          window.location.reload(false)
        },
        function (error) {
          alert('Mensaje NO Enviado , intenta de nuevo')
          console.log('FAILED', error);
        }
      );
    
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            {' '}
            <AnimatedLetters
              idx={15}
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'a', 'm', 'e']}
            />
          </h1>
          <p>
            Lorem Ipsum es la denominación que recibe el texto en latín que
            habitualmente se utiliza de prueba en los proyectos de diseño
            gráfico y borradores para comprobar el resultado de los diseños, las
            grafías, los colores o la distribución del espacio
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    name="name"
                    placeholder="Nombre"
                    type={'text'}
                    autoFocus
                    required
                  />
                </li>
                <li className="half">
                  <input
                    name="email"
                    placeholder="Email"
                    type={'text'}
                    required
                  />
                </li>
                <li>
                  <input
                    name="subject"
                    placeholder="Asunto"
                    type={'text'}
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    required
                  ></textarea>
                </li>
                <li>
                  <input className="flat-button" type="submit" value="ENVIAR" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
