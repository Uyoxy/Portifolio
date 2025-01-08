import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { db, auth, collection, addDoc } from '../firebase'; // Import Firebase functions
import { onAuthStateChanged } from 'firebase/auth'; // For checking if the user is authenticated

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name should be at least 2 characters long'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message should be at least 10 characters long'),
});

const Contact = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (isAuthenticated) {
      try {
        await addDoc(collection(db, 'messages'), {
          name: values.name,
          email: values.email,
          message: values.message,
          timestamp: new Date(),
        });

        toast.success('Your message has been sent successfully!');
        resetForm();
      } catch (error) {
        toast.error('Error submitting your message. Please try again.');
      }
    } else {
      toast.error('You must be logged in to submit a message.');
    }
  };

  return (
    <section id="contact" className="p-8 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="grid gap-4">
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 border w-full"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 border w-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Message"
                className="p-2 border w-full"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <button type="submit" className="bg-purple-600 text-white p-2">
              Send
            </button>
          </Form>
        )}
      </Formik>

      {/* Toast container for displaying toasts */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
