import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/index.js';
import image from '../../assets/img/jb.JPG'
import './index.scss';

const Home = () => {
  const letterClass = 'text-animate'
  const nameArray = [
    'J',
    'u',
    'a',
    'n',
    ' ',
    'B',
    'a',
    'u',
    't',
    'i',
    's',
    't',
    'a',
  ];
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _9`}>o</span>
          <span className={`${letterClass} _10`}>l</span>
          <span className={`${letterClass} _11`}>a</span>
          <br />
          <span className={`${letterClass} _12`}>S</span>
          <span className={`${letterClass} _13`}>o</span>
          <span className={`${letterClass} _14`}>y</span>
          <span> </span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={29}
          />
        </h1>
        
        <h2>JavaScript | Node.js | React | Redux | SQL</h2>
        <Link to="/contact" className="flat-button">
          CONTACTAME
        </Link>
      </div>
      <img src={image} className='img' alt='jb'/>
    </div>
  );
};

export default Home;
