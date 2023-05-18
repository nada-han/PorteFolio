import React from 'react';
import { useSpring, animated } from 'react-spring';

const CV = process.env.PUBLIC_URL + '/CV-VF.pdf';

const Home = () => {
  const fadeProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-start align-items-center">
          <animated.img src={process.env.PUBLIC_URL + '/images/pic2.jpg'} alt="Ma photo" className="img-fluid" style={{ maxWidth: '30%', marginRight: '30px', marginLeft: '500px', ...fadeProps }} />
        </div>
        <div className="col-md-6">
          <h2>Bonjour, je suis Nada HANSAL</h2>
          <h4>Étudiante en Ingénierie Informatique et Technologies Émergentes</h4>
          <p>En tant qu'étudiante en génie informatique, je suis passionnée par l'univers de la technologie et je me consacre à acquérir les compétences nécessaires pour devenir une ingénieure informatique accomplie. Mon parcours académique m'a permis de développer une solide compréhension des principes fondamentaux de l'informatique ainsi qu'une base de connaissances variée dans des domaines tels que la programmation, les réseaux, la sécurité informatique et les bases de données.</p>
          <div className="d-flex justify-content-center"> 
            <a href={CV} download className="btn btn-dark">Télécharger CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
