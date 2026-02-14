import { FaWifi, FaParking, FaShieldAlt } from "react-icons/fa";
import { MdKitchen, MdOutlineYard } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { GiBarbecue } from "react-icons/gi";

import './amenities.css' ;

export default function Amenities() {
  return (
    <section className="amenities" id="amenities">
      <div className="container">
        <h2>OLANAKLAR</h2>

        <div className="amenities-grid">
          <div className="card">
            <FaWifi className="icon" />
            <h3>Ücretsiz WiFi</h3>
            <p>Yüksek hızlı internet bağlantısı</p>
          </div>

          <div className="card">
            <TbAirConditioning className="icon" />
            <h3>Klima</h3>
            <p>Her odada klima sistemi</p>
          </div>

          <div className="card">
            <MdKitchen className="icon" />
            <h3>Tam Donanımlı Mutfak</h3>
            <p>Modern mutfak ekipmanları</p>
          </div>

          <div className="card">
            <FaParking className="icon" />
            <h3>Ücretsiz Otopark</h3>
            <p>Güvenli otopark</p>
          </div>

          <div className="card">
            <GiBarbecue className="icon" />
            <h3>Barbekü / Mangal</h3>
            <p>Barbekü alanları</p>
          </div>

          <div className="card">
            < MdOutlineYard className="icon" />
            <h3>Bahçe</h3>
            <p>Yalnızca konuklara açık bahçe</p>
          </div>
        </div>
      </div>
    </section>
  );
}