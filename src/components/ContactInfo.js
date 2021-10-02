import React from "react";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"

const ContactInfo = ({ phone, email, location }) => {
    return (
        <div>
            <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Get in touch
            </h1>
            <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                Fill out the form to get more info!
            </p>

            <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-60">
                    {location}
                </div>
            </div>

            <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-60 hover:text-green-500">
                    <a href={`sms://+1${phone}`}>{phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}</a>
                </div>
            </div>

            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-60 hover:text-green-500">
                    <a href={`mailto:${email}`}> {email} </a>
                </div>
            </div>
            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <FaInstagram
                    className="w-8 h-8 text-gray-500" />
                <div className="ml-4 text-md tracking-wide font-semibold w-60 hover:text-green-500">
                    <a href="https://www.instagram.com/jamesthedogwalker"
                        target="_blank"
                        rel="noopener noreferrer"> @jamesthedogwalker</a>
                </div>
            </div>
            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <FaFacebook
                    className="w-8 h-8 text-gray-500" />
                <div className="ml-4 text-md tracking-wide font-semibold w-60 hover:text-green-500">
                    <a href="https://www.facebook.com/jamesthedogwalker"
                        target="_blank"
                        rel="noopener noreferrer"> facebook.com/jamesthedogwalker</a>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;