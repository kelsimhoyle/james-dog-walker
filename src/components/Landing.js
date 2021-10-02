import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Landing = ({ bg, title, subtitle, paragraph }) => {

    return (
        <>
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative md:z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <main className=" mx-auto max-w-7xl px-4  sm:px-6">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900  md:text-6xl pt-10">
                                    <span className="block ">{title}</span>
                                    <span className="block text-green-500 ">{subtitle}</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    {paragraph}
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link to="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10">
                                            Schedule First Visit
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link to="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <GatsbyImage
                        image={bg} alt="James the Dog Walker"
                        imgClassName="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    />

                </div>
            </div>
        </>
    )
};

export default Landing;



