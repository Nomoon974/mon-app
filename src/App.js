import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Gallery from './component/Gallery';
import Contact from './component/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
