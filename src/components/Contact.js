import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h2>Contactez-moi via email : nada.hansal2001@gmail.com</h2>
        <div className="mt-4">
          <h2>Suivez-moi sur LinkedIn :</h2>
          <div className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/nadahansal/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
