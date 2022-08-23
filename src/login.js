import React from 'react';
import { useFormik } from 'formik';

function Login() {
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Please Fill...';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Please Fill...';
        } else if (values.password.length >= 10 || values.password.length < 4) {
            errors.password = 'max letters 10 min letters 4';
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
    });
    return (
        <div className='flex items-center justify-center h-screen bg-gradient-to-r from-violet-600 to-fuchsia-600'>

            <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center w-1/2 h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
                <h1 className='text-center text-white text-2xl mt-6'>Log In</h1>
                <label
                    htmlFor="email"
                    className='mt-5 text-white'>Email
                </label>
                <input
                    className='w-1/3 border-amber-400 border-2 h-8'
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <label
                    htmlFor="password"
                    className='mt-5 text-white'>Password</label>
                <input
                    className='w-1/3 border-amber-400 border-2 h-8'
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                <button
                    type="submit"
                    className='mb-10 mt-20 w-32 h-12 bg-slate-500 rounded-lg text-yellow-50 hover:text-red-300 hover:bg-white'>Submit</button>
            </form>
        </div>
    );
}

export default Login;
