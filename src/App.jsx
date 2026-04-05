import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/assets/pages/home';
import About from '../src/assets/pages/about';
import Skills from '../src/assets/pages/skills';
import Projects from '../src/assets/pages/project';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import './assets/css/global.css';

export default function App() {
    library.add(faBars, faFacebook, faInstagram, faYoutube, faGithub);
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </Router>
    );
}
