import React from 'react';

import '../style/home.scss';

export function Home(){
  return (
    <div className="home-container">
      <span className="home-company-name">
        Vibbra!
      </span>
      <span className="home-message">
        Interface de configuração do canal de comunicação.
      </span>
    </div>
  );
}