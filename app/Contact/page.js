'use client'

import React from 'react';
import { useFormik } from 'formik';
import styles from './Contact.module.css';

const page = () => {

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            message: '', // Changed to lowercase for consistency
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className='mainContainer' style={{ backgroundImage: "url('Banner.jpg')" }}>
            <div className={styles.contactForm}>
                <div className={styles.form}>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor='firstName'>Name</label>
                        <input
                            className={styles.contactInput}
                            id='firstName'
                            name='fullName'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.fullName}
                        />
                        <label htmlFor='email'>Email</label>
                        <input
                            className={styles.contactInput}
                            id='email'
                            name='email'
                            type='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            required
                        />
                        <label htmlFor='message'>Message</label>
                        <input
                            className={styles.contactInput}
                            id='message'
                            name='message'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        />
                        <button type='submit' className={styles.contactSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;
