import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import addContact from "../functions/addContact";
import ConfirmModal from "./ConfirmModal";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const zipRegExp = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

const formValues = {
    Name: "",
    Email: "",
    Tel: "",
    CrossStreets: "",
    City: "",
    Zip: "",
    Message: ""
};

const ContactSchema = Yup.object().shape({
    Name: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    Email: Yup.string().email("Please enter a valid email address.").required('Please enter an email address.'),
    Tel: Yup.string().matches(phoneRegExp, "Please enter a valid phone number."),
    CrossStreets: Yup.string().required("Please provide closest major cross streets so I can provide an accurate response."),
    City: Yup.string().required("Please provide your city"),
    Zip: Yup.string().matches(zipRegExp, "Please provide a valid zipcode"),
    Message: Yup.string()
});

const ContactForm = () => {
    const [data, setData] = useState({ submitting: false, submitted: false });

    const handleSubmit = async values => {
        setData({ ...data, submitting: true });
        const { Name, Email, Tel, Message, CrossStreets, City, Zip } = values;

        if (!Name, !Email) setData({ ...data, submitted: false, errors: [...data.errors, "Name and Email Required"] })

        try {
            const contact = addContact({ Name, Email, Tel, Message, CrossStreets, City, Zip });
            if (contact) setData({
                ...contact,
                submitting: false,
                submitted: true
            });
        } catch(error) {
            console.error(error)
            setData({
                submitting: false,
                submitted: false,
                errors: [...data.errors, ...error]
            });
        }



    }
    return (
        <>
            <Formik
                initialValues={formValues}
                validationSchema={ContactSchema}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form
                        className="p-6 md:w-96 flex flex-col justify-center bg-white rounded-b-lg md:rounded-r-lg md:rounded-b-none ">
                        <div className="flex flex-col">
                            <Field
                                type="text"
                                name="Name"
                                id="Name"
                                placeholder="Name"
                                className={`${errors.Name && touched.Name ? "border-red-500" : "border-gray-400"} w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border  dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none`} />
                            <ErrorMessage name="Name" component="div" className="text-red-500 font-medium ml-1 mt-1" />

                        </div>

                        <div className="flex flex-col mt-2">
                            <Field
                                type="email"
                                name="Email"
                                id="Email"
                                placeholder="Email"

                                className={`${errors.Email && touched.Email ? "border-red-500" : "border-gray-400"} w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none`} />
                            <ErrorMessage name="Email" component="div" className="text-red-500 font-medium ml-1 mt-1" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <Field
                                type="text"
                                name="CrossStreets"
                                id="CrossStreets"
                                placeholder="Major Cross Streets"
                                className={`${errors.CrossStreets && touched.CrossStreets ? "border-red-500" : "border-gray-400"} w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none`} />
                            <ErrorMessage name="CrossStreets" component="div" className="text-red-500" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <Field
                                type="text"
                                name="City"
                                id="City"
                                placeholder="City"
                                className={`${errors.City && touched.City ? "border-red-500" : "border-gray-400"} w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none`} />
                            <ErrorMessage name="City" component="div" className="text-red-500" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <Field
                                type="text"
                                name="Zip"
                                id="Zip"
                                placeholder="Zip Code"
                                className={`${errors.Zip && touched.CZip ? "border-red-500" : "border-gray-400"} w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none`} />
                            <ErrorMessage name="Zip" component="div" className="text-red-500 max-w-full" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <Field
                                type="tel"
                                name="Tel"
                                id="Tel"
                                placeholder="Telephone Number"
                                className={`${errors.Tel && touched.Tel ? "border-red-500" : "border-gray-400"} w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none`} />
                            <ErrorMessage name="Tel" component="div" className="text-red-500" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <Field
                                as="textarea"
                                rows="3"
                                name="Message"
                                id="Message"
                                placeholder="Message"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-green-500 focus:outline-none resize-none" />
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