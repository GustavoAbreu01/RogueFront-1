import React from 'react';
import ReactDOM from 'react-dom/client';
import VLibras from '@djpfs/react-vlibras';
import 'semantic-ui-css/semantic.min.css';
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import App from './App';
import Libras from './accessibility/libras/Libras';

const verify = () => {
  const libras = localStorage.getItem('showComponent');
  if (libras) {
    return true;
  } else {
    return false;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {verify() && (
      <Libras />
    )}
    <App />
  </React.StrictMode>
);


