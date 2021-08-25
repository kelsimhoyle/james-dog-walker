import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import addContact from "../functions/addContact";
import ConfirmModal from "./ConfirmModal";

const ContactSchema = Yup.object().shape({
    Name: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    Email: Yup.string().email('Invalid email').required('Required'),
    Tel: Yup.string().matches(new RegExp('[0-9]{7}')),
    Message: Yup.string()
});

const ContactForm = () => {
    const [data, setData] = useState({ submitting: false, submitted: false });


    const handleSubmit = values => {
        setData({ ...data, submitting: true });
        const { Name, Email, Tel, Message } = values;

        if (addContact({ Name, Email, Tel, Message })) {
            return setData({ ...data, submitting: false, submitted: true })
        };

        return setData({ ...data, submitting: false, submitted: false, errors: [...data.errors, "Error submitting contact request."] })
    }
    return (
        <>
            <Formik
                initialValues={{ Name: "", Email: "", Message: "", Tel: "" }}
                validationSchema={ContactSchema}

                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            >
                {({ isSubmitting, errors }) => (
                    <Form
                        className="p-6 flex flex-col justify-center bg-white rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                        <div className="flex flex-col">
                            <Field
                                type="name"
                                name="Name"
                                id="Name"
                                placeholder="Name"

                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <Field
                                type="email"
                                name="Email"
                                id="Email"
                                placeholder="Email"

                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none" />
                            <ErrorMessage name="Email" component="div" />

                        </div>

                        <div className="flex flex-col mt-2">
                            <Field
                                type="tel"
                                name="Tel"
                                id="Tel"
                                placeholder="Telephone Number"

                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none" />
                            <ErrorMessage name="Tel" component="div" />

                        </div>

                        <div className="flex flex-col mt-2">
                            <Field
                                type="text"
                                name="Message"
                                id="Message"
                                placeholder="Message"

                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none" />
                        </div>

                        <button type="submit" className="md:w-32 bg-green-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-500 transition ease-in-out duration-300 disabled:opacity-50"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            {data.submitted ? <ConfirmModal openModal={data.submitted} title="Contact Request Submitted" text="I am excited for the opportunity to get to know you and your dog! I will get back to you as soon as possible." /> : null}
        </>
    )
}

export default ContactForm;