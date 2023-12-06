import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function UserRegistration() {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    country: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    gender: Yup.string().required('Gender is required'),
    country: Yup.string().required('Country is required'),
  });

  const handleSubmit = (values) => {
    console.log('Form submitted with values:', values);

    
    fetch('http://localhost:3000/users', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values), 
    })
      .then((response) => {
        if (response.ok) {
          
        } else {
          
          console.error('Error submitting the form');
        }
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Registration</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="form-group">
                  <label>Email:</label>
                  <Field
                    type="text"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error text-danger"
                  />
                </div>

                <div className="form-group">
                  <label>Password:</label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error text-danger"
                  />
                </div>

                <div className="form-group">
                  <label>Confirm Password:</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error text-danger"
                  />
                </div>

                <div className="form-group">
                  <label>First Name:</label>
                  <Field
                    type="text"
                    name="firstName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error text-danger"
                  />
                </div>

                <div className="form-group">
                  <label>Last Name:</label>
                  <Field
                    type="text"
                    name="lastName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error text-danger"
                  />
                </div>

                <div className="form-group">
                  <label>Date of Birth:</label>
                  <Field
                    type="date"
                    name="dateOfBirth"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="dateOfBirth"
                    component="div"
                    className="error text-danger"
                  />
                </div>

                <div className="form-group">
                  <label>Gender:</label>
                  <Field
                    as="select"
                    name="gender"
                    className="form-control"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="error text-danger"
                  />
                </div>

                <div className="form-group">
                  <label>Country:</label>
                  <Field
                    type="text"
                    name="country"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="error text-danger"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
