import React from "react";
import { Link } from "gatsby";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

const Footer = ({ pages }) => (
    <div className="w-full min-h-screen pt-6 flex items-center justify-center bg-green-800">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div className="w-full text-7xl font-bold">
                <h2 className="w-full md:w-2/3">Let's get walkin' today.</h2>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                <p className="w-full md:w-2/3 text-white">Contact to learn more and set up a meet and great.</p>
                <div className="w-44 pt-6 md:pt-0">
                    <Link to="/contact" className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Contact</Link>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex mt-24 mb-12 flex-col md:flex-row justify-between items-center align-center justify-center py-6">
                    <div className="">
                        James the Dog Walker
                    </div>

                    {pages.map(page => (
                        <Link
                            key={page.name}
                            to={page.href}
                            className=" cursor-pointer text-white hover:text-green-200 uppercase p-2"
                        >
                            {page.name}
                        </Link>

                    ))}

                    <div className="flex flex-row space-x-8 items-center justify-between">
                        <a
                            href="https://www.instagram.com/jamesthedogwalker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.facebook.com/jamesthedogwalker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2"

                        >
                            <FaFacebook />
                        </a>


                    </div>
                </div>
                <hr className="border-white" />
                <p className="w-full text-center my-12 text-white">Copyright © 2021 James the Dog Walker</p>
            </div>
        </div>
    </div>
)

export default Footer;