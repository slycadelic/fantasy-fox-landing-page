'use client'

import React from 'react';
import { useFormik } from 'formik';

const page = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      phone: '',
      message: '', // Changed to lowercase for consistency
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='mainContainer' style={{ backgroundImage: "url('Banner.jpg')" }}>
      <div className='contactForm'>
        <div className='heading' style={{ backgroundImage: "url('Programming.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100'
    }}>
          <h1>Contact Us</h1>
          <p>Feel free to drop us a Message Below</p>
        </div>
        <div className='form'>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <input
              id='firstName'
              name='firstName'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <label htmlFor='email'>Email Address</label>
            <input
              id='email'
              name='email'
              type='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor='phone'>Phone</label>
            <input
              id='phone'
              name='phone'
              type='tel'
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <label htmlFor='message'>Message</label>
            <input
              id='message'
              name='message'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
