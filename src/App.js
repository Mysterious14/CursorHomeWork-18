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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/publications">Publications</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </>
  );
}

export default App;
