import React from 'react';
import img1 from './img/img-1.jpg';
import img2 from './img/img-2.jpg';
import img3 from './img/img-3.jpeg';
import img4 from './img/img-4.jfif';

export default function Gallery() {
  return (
    <>
      <img src={img1} />
      <img src={img3} />
      <img src={img2} />
      <img src={img4} />
    </>
  );
}
