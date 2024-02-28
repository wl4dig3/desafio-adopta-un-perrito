import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Header headerTitle='Adopta una mascota' />
      <Cards />
      <Footer />
    </>
  )
}

export default App
