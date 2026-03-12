import Header from "../../components/header/Header.jsx"; // ajusta según la realidad
import Personaje from "../../components/CardPersonaje/Personaje.jsx";
import Historia from "../../components/historias/Historia.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Historia />
      <section className="personajes-home">
        <h2>Personajes Icónicos de la Saga</h2>
        <Personaje />
      </section>
      <Footer />
    </div>
  );
}
