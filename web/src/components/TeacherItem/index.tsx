import React from 'react';

import whatsappIcon from '../../assets/imgs/icons/whatsapp.svg';

import './styles.css';

const TecaherItem = () => {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://i.pinimg.com/originals/51/d9/7a/51d97aeaf56397b0a31715404d3f488c.png" alt="Naruto" />
          <div>
            <strong>Uzumaki Naruto</strong>
            <span>Ninja</span>
          </div>
      </header>

      <p>
        Naruto é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila.
        <br/>
        Futuro hokage da vila da folha!
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TecaherItem;