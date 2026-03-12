import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGit, FaGithub } from 'react-icons/fa'; // Si no usas react-icons, borra esta línea
import { Link } from 'react-router-dom';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Columna 1: Acerca de */}
        <div className="footer-section">
          <h3>Sobre Mí</h3>
          <p>
            Desarrollador web apasionado por crear experiencias digitales únicas.
            Especializado en React, Node.js y diseño responsivo.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/home">Inicio</Link></li>
            <li><Link to="/Personajes">Personajes</Link></li>
            <li><Link to="/Naves">Naves</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: Morenoabel806@gmail.com</p>
          <p>Teléfono: 3126636996</p>
          <p>Ciudad: Bogota Colombia</p>
        </div>

        {/* Columna 4: Redes Sociales */}
        <div className="footer-section">
          <h3>Sígueme</h3>
          <div className="social-links">
            {/* Si no usas react-icons, reemplaza los componentes por texto o emojis */}
            <a href="https://www.facebook.com/abel.moreno.728781" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>  
            <a href="https://github.com/abel794" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/abel-moreno-89a008212/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Línea inferior con copyright */}
      <div className="footer-bottom">
        <p>Desarrollado por Abel Moreno &copy; {currentYear} | Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}