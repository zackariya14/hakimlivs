// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx'; 

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// index.js eller index.tsx


// import { createRoot } from 'react-dom/client';

// import { createRoot } from 'react-dom';
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(<App />);

// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(<App />);


// index.js
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter basename="/your-base-name">
//     <App />
//   </BrowserRouter>
// );




// Importera BrowserRouter från react-router-dom
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Använd BrowserRouter för att omsluta din App-komponent
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
