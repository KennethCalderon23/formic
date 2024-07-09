// Importa createRoot desde react-dom/client en lugar de react-dom
import { createRoot } from 'react-dom/client';

// Resto del código sin cambios
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Formlogin } from './components/Formlogin'; 
import { Register } from './components/Register'; 
import { Profile } from './components/Profile'; 
import { Api } from './components/Api';
import PrivateRoute from './components/PrivateRoute'; 
import './components/styles.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Formlogin />} /> 
                <Route path="/register" element={<Register />} /> 
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} /> 
                <Route path="/api" element={<PrivateRoute><Api /></PrivateRoute>} /> 
            </Routes>
        </Router>
    );
}

// Utiliza createRoot para renderizar la aplicación en el elemento con id 'root'
createRoot(document.getElementById('root')).render(<App />);
