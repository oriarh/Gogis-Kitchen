import React from 'react';
import AppCopyMineOld from './appCopyMineOld'
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';


const root = createRoot(document.getElementById('root'));
root.render(  
    <>
{/* <React.StrictMode> */}
    <AuthProvider>
        <AppCopyMineOld/>
    </AuthProvider>
{/* </React.StrictMode> */}
    </>
);

