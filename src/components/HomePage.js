import React from 'react';
import mainPage from './img/mainPage.jpg';

export default function HomePage() {
  return (
    <div>
      <img src={mainPage} className="mainPagePhoto" />
      <h1>
        ПА-<span>ЛЯ</span>-НИ-<span>ЦЯ</span>
      </h1>
    </div>
  );
}
