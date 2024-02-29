import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import cardStr from './constans/cardStr';


function App() {

  return (
    <>
      <Header headerTitle='Adopta una mascota' />
      <Cards img={cardStr.bartolo.img} title={cardStr.bartolo.titulo} description={cardStr.bartolo.description} btntitle={cardStr.bartolo.btntitle} />
      <Cards img={cardStr.messi.img} title={cardStr.messi.titulo} description={cardStr.messi.description} btntitle={cardStr.messi.btntitle} />
      <Cards img={cardStr.gohan.img} title={cardStr.gohan.titulo} description={cardStr.gohan.description} btntitle={cardStr.gohan.btntitle} />
      <Cards img={cardStr.princesa.img} title={cardStr.princesa.titulo} description={cardStr.princesa.description} btntitle={cardStr.princesa.btntitle} />
      <Footer footerTitle={cardStr.FOOTER} />
    </>
  )
}

export default App
