import React from 'react';
import { useFormik } from 'formik';

function Register() {
    const validate = values => {
        const onlyLetters = /^[A-Za-z]+$/;
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Please Fill...';
        } else if (!values.firstName.match(onlyLetters)) {
            errors.firstName = 'Only Characters';
        }

        if (!values.lastName) {
            errors.lastName = 'Please Fill...';
        } else if (!values.lastName.match(onlyLetters)) {
            errors.lastName = 'Only Characters';
        }

        if (!values.email) {
            errors.email = 'Please Fill...';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.age) {
            errors.age = 'Please Fill...';
        } else if (values.age < 18) {
            errors.age = 'You must be at least 18';
        }

        if (!values.password) {
            errors.password = 'Please Fill...';
        } else if (values.password.length >= 10 || values.password.length < 4) {
            errors.password = 'max letters 10 min letters 4';
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Please Fill...';
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Password Doesn't match";
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
        },
        validate,
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <div className='flex items-center justify-center h-screen bg-gradient-to-r from-violet-600 to-fuchsia-600'>

            <form onSubmit={formik.handleSubmit} className='flex flex-col justify-start items-center w-1/2 h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
                <h1 className='text-center text-white text-2xl mt-6'>Registration</h1>
                <label
                    htmlFor="email"
                    className='mt-5 text-white'>Email
                </label>
                <input
                    className='w-1/3 border-amber-400 border-2 h-8 mt-2'
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <label htmlFor="firstName" className='mt-5 text-white'>FirstName</label>
                <input
                    className='w-1/3 border-amber-400 border-2 h-8 mt-2'
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

                <label
                    htmlFor="lastName"
                    className='mt-5 text-white'>LastName
                </label>
                <input
                    className='w-1/3 border-amber-400 border-2 h-8 mt-2'
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

                <label
                    htmlFor="age"
                    className='mt-5 text-white'>Age
                </label>
                <input
                    className='w-1/3 border-amber-400 border-2 h-8 mt-2'
                    id="age"
                    name="age"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                />
                {formik.errors.age ? <div>{formik.errors.age}</div> : null}

                <label
                    htmlFor="password"
                    className='mt-5 text-white'>Password
                </label>
                <input
                    className='w-1/3 border-amber-400 border-2 h-8 mt-2'
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                <label 
                htmlFor="confirmPassword" 
                className='mt-5 text-white'>Confirm Password
                </label>
                <input
                    className='w-1/3 border-amber-400 border-2 h-8 mt-2'
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                />
                {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}

                <button
                    type="submit"
                    className='mt-10 w-32 h-12 bg-slate-500 rounded-lg text-yellow-50 hover:text-red-300 hover:bg-white'>Submit
                </button>
            </form>
        </div>
    );
}


export default Register;