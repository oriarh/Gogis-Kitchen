import React from 'react';
import App from './app'
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';


const root = createRoot(document.getElementById('root'));
root.render(  
    <>
    <React.StrictMode>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </React.StrictMode>
    </>
);

