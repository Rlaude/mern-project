import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NarrativesContextProvider } from './context/NarrativesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NarrativesContextProvider>
      <App />
    </NarrativesContextProvider>
  </React.StrictMode>
);


