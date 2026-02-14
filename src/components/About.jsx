import './about.css';
function About() {
    return (
       <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-text">
          <span className="about-mini-title">ROSERY HAKKINDA</span>
          <h2>Şehrin Kalbinde Konfor</h2>
          <p>
            Rosery Apart, şehrin kalbinde modern ve konforlu günlük kiralık
            daire hizmeti sunmaktadır. Misafirlerimize ev konforunda,
            otel kalitesinde bir konaklama deneyimi yaşatmayı hedefliyoruz.
            Her detay özenle tasarlanmış dairelerimiz, iş ve tatil
            amaçlı konaklamalarınız için ideal bir seçimdir.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h3>500+</h3>
            <p>Mutlu Misafir</p>
          </div>

          <div className="stat">
            <h3>100%</h3>
            <p>Temizlik Garantisi</p>
          </div>

          <div className="stat">
            <h3>24/7</h3>
            <p>Destek Hizmeti</p>
          </div>

          <div className="stat">
            <h3>5★</h3>
            <p>Ortalama Puan</p>
          </div>
        </div>

      </div>
    </section>
    );
}
export default About;