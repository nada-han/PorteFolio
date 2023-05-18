import React from 'react';
import './Certifications.css';
import Carousel from 'react-bootstrap/Carousel';

const Certifications = () => {
  const certifications = [
    { id: 1, title: 'Certification JavaFX', image: '/images/certif-javafx.jpg' },
    { id: 2, title: 'Certification WordPress', image: '/images/certif-wordPress.jpg' },
    // { id: 3, title: 'Certification 3', image: '/images/certification3.jpg' }
  ];

  return (
    
    <div  className="d-flex justify-content-center align-items-center vh-100">
      
      <Carousel id="certificationsCarousel" interval={5000} pause={false}>
        {certifications.map((certifications, index) => (
          <Carousel.Item key={certifications.id} className={index === 0 ? 'active' : ''}>
            <img src={certifications.image} alt={certifications.title} className="d-block w-100 custom-image" />
            <Carousel.Caption>
              <h5>{certifications.title}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Certifications;
