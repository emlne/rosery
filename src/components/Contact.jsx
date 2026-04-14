import './contact.css' ;
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { SiAirbnb } from "react-icons/si";

export default function Contact() {
  const locations = [
    {
      title: "Rosery Apart Çiftlik",
      map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3199.1276642631906!2d29.088376999999998!3d36.69547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDQxJzQzLjciTiAyOcKwMDUnMTguMiJF!5e0!3m2!1str!2str!4v1771059116955!5m2!1str!2str",
      address: "Çiftlik Mahallesi, Cumhuriyet Caddesi No:9/A, MUĞLA/Fethiye",
      phone: "+90 536 783 98 18",
      instagram: "https://www.instagram.com/rosery_apart/",
      airbnb: "https://www.airbnb.com.tr/users/profile/1470507955382401229",
      sahibinden: "https://shbd.io/s/Tsm0OHX0"
    },
    {
      title: "Rosery Apart Günlükbaşı",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.6799845755427!2d29.1414525!3d36.658148600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c04481af48b601%3A0xf0f51b27010a1467!2sCami%2C%201183.%20Sk.%20No%3A14%2C%2048300%20Fethiye%2FMu%C4%9Fla!5e0!3m2!1str!2str!4v1771065846887!5m2!1str!2str",
      address: "Cami Mahallesi, 1183. Sokak No:14, MUĞLA/Fethiye",
      phone: "+90 536 783 98 18",
      instagram: "https://www.instagram.com/rosery_apart/",
      airbnb: "https://www.airbnb.com.tr/rooms/1662519655034732898?source_impression_id=p3_1776172161_P3hsb8R4SPwwKgzL",
      sahibinden: "https://shbd.io/s/Tsm0OHX0"
    }
  ];

  return (
    <section className="locations" id="contact">
      <h2>BİZE ULAŞIN</h2>

      {locations.map((loc, index) => (
        <div key={index} className="location-card">

          <iframe
            src={loc.map}
            loading="lazy"
            allowFullScreen=""
          ></iframe>

          <div className="location-info">
            <h3>{loc.title}</h3>

            <p>
              <MdLocationOn className="icon" />
              {loc.address}
            </p>

            <p>
              <FaPhoneAlt className="icon" />
              {loc.phone}
            </p>

            <div className="social-links">
              <a href={loc.instagram} target="_blank">Instagram</a>
              <a href={loc.airbnb} target="_blank">Airbnb</a>
              <a href={loc.sahibinden} target="_blank">Sahibinden</a>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}