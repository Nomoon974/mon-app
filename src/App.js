import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Gallery from './component/Gallery';
import Contact from './component/Contact';

import { BrowserRouter,Routes,Route  } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/gallery" element={ <Gallery />} />
        <Route path="/contact" element={ <Contact />} />
      
      </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
