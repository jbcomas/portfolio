import { faGamepad, faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const Project = () => {
  return (
    <div className="container project-page">
      <div className="text-zone">
        <ul className="ul-projects">
          <li>
            <FontAwesomeIcon icon={faStore} color="#4d4d4e" />
            <p>
              E-commerce Sneakers-Paradise es un proyecto grupal usando
              metodologias agiles, en este caso SCRUM, y como tecnologias se
              usaron para el BACK-END: Node, Express, Firebase, Mongoose,
              EmailJs.
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faGamepad} color="#4d4d4e" />
            <p>SPA (single page aplication)</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
