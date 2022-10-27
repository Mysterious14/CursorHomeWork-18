import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Contacts from './components/Contacts';
import Gallery from './components/Gallery';
import Publications from './components/Publications';

function App() {
  return (
    <>
      <header>
        <ul className="header">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/contacts">Contacts</a>
          </li>
          <li>
            <a href="/publications">Publications</a>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </>
  );
}

export default App;
