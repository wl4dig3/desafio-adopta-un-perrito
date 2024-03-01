import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import cardStr from './constans/cardStr';


function App() {

  return (
    <>
      <Header headerTitle={cardStr.HEADER} />
      <section className='container-pets'>
        <Cards
          img={cardStr.bartolo.img}
          title={cardStr.bartolo.titulo}
          description={cardStr.bartolo.description}
          btntitle={cardStr.bartolo.btntitle}
          textoBadge='husky'
          colorBadge='danger'

        />
        <Cards
          img={cardStr.messi.img}
          title={cardStr.messi.titulo}
          description={cardStr.messi.description}
          btntitle={cardStr.messi.btntitle}
          textoBadge='Messi'
          colorBadge='primary'
        />
        <Cards
          img={cardStr.gohan.img}
          title={cardStr.gohan.titulo}
          description={cardStr.gohan.description}
          btntitle={cardStr.gohan.btntitle}
          textoBadge='Gohan'
          colorBadge='secondary'
        />
        <Cards
          img={cardStr.princesa.img}
          title={cardStr.princesa.titulo}
          description={cardStr.princesa.description}
          btntitle={cardStr.princesa.btntitle}
          textoBadge='Princersa'
          colorBadge='warning'
        />
      </section>
      <Footer footerTitle={cardStr.FOOTER} />
    </>
  );
};

export default App
