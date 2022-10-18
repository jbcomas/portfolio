import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts';
import Contact from './components/Contacs';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Projects';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
