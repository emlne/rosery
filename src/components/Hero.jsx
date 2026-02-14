import React from 'react';
import './hero.css';
import heroImage from './hero.jpeg';
function Hero() {

    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="overlay"></div>
            <div className="hero-content">
            <div className="hero-left">
          <h1>
            GÜNLERİNİZİ <br />
            ÖZEL <br />
            KILIN <br />
            <span className="gradient-text">ROSERY</span> <br />
            İLE
          </h1>
        </div>    
        <div className="hero-right">
          <p>
            Modern konfor ve şehir merkezine yakınlık bir arada.
            Rosery Apart ile günlük kiralık daire deneyimini yeniden keşfedin.
          </p>
          <button className="discover-btn">Keşfet</button>
        </div>
      </div>
    </section>
    )
}
export default Hero;