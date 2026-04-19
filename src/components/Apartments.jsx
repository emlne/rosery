import {useState} from 'react';
import './apartments.css';
/*
import kat2 from "./kat2/kat2.jpeg";
import kat2_1 from "./kat2/kat2_1.jpeg";
import kat2_2 from "./kat2/kat2_2.jpeg";
import kat2_3 from "./kat2/kat2_3.jpeg";
import kat2_4 from "./kat2/kat2_4.jpeg";
import kat2_5 from "./kat2/kat2_5.jpeg";
import kat2_6 from "./kat2/kat2_6.jpeg";
import kat2_7 from "./kat2/kat2_7.jpeg";

import kat1 from "./kat1/kat1.jpeg";
import kat1_1 from "./kat1/kat1_1.jpeg";
import kat1_2 from "./kat1/kat1_2.jpeg";

import gb2 from "./gb2/gb2.jpeg";
import gb2_1 from "./gb2/gb2_1.jpeg";
import gb2_2 from "./gb2/gb2_2.jpeg";
import gb2_3 from "./gb2/gb2_3.jpeg";

import gb1 from "./gb1/gb1.jpeg";
import gb1_1 from "./gb1/gb1_1.jpeg";
import gb1_2 from "./gb1/gb1_2.jpeg";
import gb1_3 from "./gb1/gb1_3.jpeg";
import gb1_4 from "./gb1/gb1_4.jpeg";
import gb1_5 from "./gb1/gb1_5.jpeg";
import gb1_6 from "./gb1/gb1_6.jpeg";
*/
export default function Apartments() {
   
    const apartments = [
    {
      id: 1,
      title: "Çiftlik 2+1",
      images: [
        "assets/kat2/kat2.jpeg",
        "assets/kat2/kat2_1.jpeg",
        "assets/kat2/kat2_2.jpeg",
        "assets/kat2/kat2_3.jpeg",
        "assets/kat2/kat2_4.jpeg", 
        "assets/kat2/kat2_5.jpeg",
        "assets/kat2/kat2_6.jpeg",
        "assets/kat2/kat2_7.jpeg",
        "assets/kat2/kat2_8.jpeg",
      ],
    },
    {
      id: 2,
      title: "Çiftlik 3+1",
      images: [
        "assets/kat1/kat1.jpg",
        "assets/kat1/kat1_1.jpeg",
        "assets/kat1/kat1_2.jpeg",
      ],
    },
    {
      id: 3,
      title: "Günlükbaşı 2+1",
      images: [
        "assets/gb2/gb2.jpeg",
        "assets/gb2/gb2_1.jpeg",
        "assets/gb2/gb2_2.jpeg",
        "assets/gb2/gb2_3.jpeg",
        "assets/gb2/gb2_4.png",
        "assets/gb2/gb2_5.png",  
      ],
    },
    {
      id: 4,
      title: "Günlükbaşı 1+1",
      images: [
        "assets/gb1/gb1.jpeg",
        "assets/gb1/gb1_1.jpeg",
        "assets/gb1/gb1_2.jpeg",
        "assets/gb1/gb1_3.jpeg",
        "assets/gb1/gb1_4.jpeg",
        "assets/gb1/gb1_5.jpeg",
        "assets/gb1/gb1_6.jpeg",
      ],
    },
  ];

  const [selectedApartment, setSelectedApartment] = useState(apartments[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % selectedApartment.images.length
    );
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + selectedApartment.images.length) %
        selectedApartment.images.length
    );
  };

  return (
    <section className="apartments-section" id="apartments">
      <h2>DAİRELERİMİZ</h2>
      <div className="apartment-tabs">
        {apartments.map((apt) => (
           <button
              key={apt.id}
              className={selectedApartment.id === apt.id ? "active-tab" : ""}
              onClick={() => setSelectedApartment(apt)}
            >
      {apt.title}
    </button>
  ))}
      </div>

      <div className="apartment-gallery">
        {selectedApartment.images.slice(0, 5).map((img, index) => (
          <div
            key={index}
            className={`gallery-item item-${index}`}
            onClick={() => openModal(index)}
          >
            <img src={img} alt="" />
            {index === 4 &&
              selectedApartment.images.length > 5 && (
                <div className="overlay">
                  +{selectedApartment.images.length - 5}
                </div>
              )}
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="modal">
          <button className="close" onClick={() => setIsOpen(false)}>
            ✕
          </button>

          <button className="prev" onClick={prevImage}>
            ‹
          </button>

          <img
            className="modal-image"
            src={selectedApartment.images[currentIndex]}
            alt=""
          />

          <button className="next" onClick={nextImage}>
            ›
          </button>
        </div>
      )}
    </section>
    );
}
