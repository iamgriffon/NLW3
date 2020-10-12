import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import '../styles/pages/landing.css';
import '../styles/global.css';
import logoImg from '../images/Logo.svg';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div id='page-landing'>
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e abrigos e mude o mundo de muitas pessoas.</p>
        </main>

        <div className="location">
          <strong> São Paulo, </strong>
          <span> SP </span>
        </div>

        <Link to='/map' className='enter-app'>
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/> 
        </Link>
        
      </div>
    </div>
  );
}

export default Landing;