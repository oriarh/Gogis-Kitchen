import React from 'react';
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

// ReactDOM.render (
//   <React.StrictMode>
//     <BrowserRouter>
//       <App/>
//     </BrowserRouter>
//   </React.StrictMode>
//   , document.getElementById('root')
// )

const root = createRoot(document.getElementById('root'));
root.render(  
<React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</React.StrictMode>
);

