import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="text-center bg-danger">
        <h1 className="txt-danger">Contenu</h1>
        <button type="button" className="btn btn-primary m-1">primary</button>
      </section>
      <Footer />
    </div>
  );
}

export default App;
