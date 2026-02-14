import "./footer.css";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          {/* Hızlı Erişim */}
          <div className="footer-column">
            <h4>HIZLI ERİŞİM</h4>
            <a href="#home">Ana Sayfa</a>
            <a href="#about">Hakkımızda</a>
            <a href="#apartments">Dairelerimiz</a>
            <a href="#amenities">Olanaklar</a>
          </div>

          {/* Olanaklar */}
          <div className="footer-column">
            <h4>OLANAKLAR</h4>
            <a href="#amenities">Ücretsiz WiFi</a>
            <a href="#amenities">Klima</a>
            <a href="#amenities">Mutfak</a>
            <a href="#amenities">Otopark</a>
          </div>

          {/* Yasal */}
          <div className="footer-column">
            <h4>YASAL</h4>
            <a href="/rosery1.pdf" target="_blank">Kullanım Şartları</a>
            <a href="#">İptal Koşulları</a>
          </div>

        </div>

        <hr />

        <div className="footer-bottom">
          <p>© 2025 Rosery Apart | Emine Türkoğlu</p>
        </div>

      </div>
    </footer>
  );
}