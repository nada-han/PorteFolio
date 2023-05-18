import React from 'react';
import { useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Education = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('fade-in'); // Add the fade-in class to each card with a delay
      }, index * 200);
    });
  }, []);

  return (
    <div  className="d-flex justify-content-center align-items-center vh-100">
      
      <Row>
        <Col>
          <Card className="h-100" style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://passerelle.ensaj.ucd.ac.ma/img/logo1.png"
              alt="Formation 1"
            />
            <Card.Body>
              <Card.Title>1ére année cycle d'ingénieure en 2ITE</Card.Title>
              <Card.Text>
                Filiére Ingénieurie Informatique et Technologies Emergentes
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100" style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://passerelle.ensaj.ucd.ac.ma/img/logo1.png"
              alt="Formation 2"
            />
            <Card.Body>
              <Card.Title>Cycle Préparatoire</Card.Title>
              <Card.Text>
                1ére année et 2éme année en cycle préparatoire
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100" style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="data:image/jpeg;base64,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"
              alt="Formation 2"
            />
            <Card.Body>
              <Card.Title>Baccalauréat</Card.Title>
              <Card.Text>
                1ére année et 2éme année Baccalauréat Science Physique 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Education;
