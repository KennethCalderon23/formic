import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export const Formlogin = () => {
    const navigate = useNavigate();

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            // Verificación de credenciales (simulado)
            if (values.email === 'kenneth@uisek.com' && values.password === '123456789') {
                localStorage.setItem('isAuthenticated', 'true'); // Establece la autenticación en localStorage
                navigate('/profile'); // Redirige a la página de perfil o la ruta protegida
            } else {
                alert('Credenciales incorrectas');
            }
        },
    });

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};
