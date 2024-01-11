'use client'

import React from 'react';
import { useFormik } from 'formik';
import styles from './Contact.module.css';
import { Kelly_Slab } from 'next/font/google';
const kelly = Kelly_Slab({ subsets: ['latin'], weight: '400' });

const page = () => {

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            message: '', // Changed to lowercase for consistency
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className='mainContainer' style={{ backgroundImage: "url('Banner.jpg')" }}>
            <div className={styles.contactForm}>
                <div className={styles.formBox}>
                    <form onSubmit={formik.handleSubmit} className={styles.form}>
                        <span className={kelly.className}>Contact Us</span>
                        <div>
                            <span>Name</span>
                            <input
                                name='fullName'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.fullName}
                            />
                        </div>
                        <div>
                            <span>Email</span>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                required
                            />
                        </div>
                        <div>
                            <span>Message</span>
                            <textarea
                                className={styles.contactInput}
                                id='message'
                                name='message'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.message}
                            />
                        </div>
                        <button type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;
