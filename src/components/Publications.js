import React from 'react';
import './Styles/publications.css';
const ANAKIN_IMAGE =
  'https://www.bobafettfanclub.com/multimedia/galleries/albums/userpics/10001/anakin-skywalker-1569312236.jpeg';

const RAY_IMAGE =
  'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';

const verified =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png';
const posts = [
  {
    name: 'Anakin Skywalker',
    photo: ANAKIN_IMAGE,
    nickname: '@dart_vader',
    official: true,
    content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
    image: RAY_IMAGE,
    date: '26 лют.',
    coments: 15,
    likes: 25,
    downloads: 2,
    shares: 7,
  },
];
export default function Publications() {
  return (
    <div className="post">
      <img id="authotPhoto" src={posts[0].photo} alt="photoAuthor"></img>
      <p id="nameAuthor">{posts[0].name}</p>
      <img className="verified" src={posts[0].official ? verified : ''} alt="verified"></img>
      <p className="nickname">{posts[0].nickname}</p>
      <p className="date">{posts[0].date}</p>
      <p className="content">{posts[0].content}</p>
      <img id="image" src={posts[0].image} alt="post"></img>
      <div className="icons">
        <p className="icon">&#10084; {posts[0].likes}</p>
        <p className="icon">&#128488; {posts[0].coments}</p>
        <p className="icon">🚀 {posts[0].shares}</p>
        <p className="icon">📥 {posts[0].downloads}</p>
      </div>
    </div>
  );
}
