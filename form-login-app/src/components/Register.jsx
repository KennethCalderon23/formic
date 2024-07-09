import { useFormik } from 'formik';
import React from 'react';
import './styles.css';

export const Register = () => {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div>
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit}>
            <input
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                />
                <input
                    type="text"
                    placeholder="user"
                    name="user"
                    onChange={handleChange}
                    value={values.text}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                />
                <button type="submit">Registrarme</button>
            </form>
        </div>
    );
}
