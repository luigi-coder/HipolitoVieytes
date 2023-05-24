import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import './home.css';


const titulo = "Systems Design"

import React from 'react';

function Home({ titulo }) {
    
  const handleClick = () => {
    console.log('¡Haz hecho clic en el botón!');
    // Aquí puedes agregar la lógica adicional que deseas ejecutar al hacer clic en el botón
  };

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="home">
        <h1>{titulo}</h1>
        <button onClick={handleClick}>Haz clic</button>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
