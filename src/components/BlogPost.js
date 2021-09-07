import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image/";
import { Link } from "gatsby";
import  { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";


const BlogPost = ({ name, image, excerpt, href }) => {
    return (
        <div className="flex h-full bg-white rounded overflow-hidden shadow-lg my-6">
            <div className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full md:w-1/2 rounded-t">
                    <GatsbyImage image={getImage(image)} imgClassName="h-full w-full shadow" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col flex-grow flex-shrink">
                    <div className="flex flex-col justify-center flex-1 space-y-6 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg p-4 ">

                        <h3 className="uppercase md:text-3xl text-green-500 font-bold">{name}</h3>

                        <div
                            className="mt-4 text-gray-600 space-y-6"
                        >
                            <p>{excerpt}</p>


                        </div>
                        {href && <Link to={href} className="font-medium text-gray-500 hover:text-gray-900 flex items-center">Read More <FaArrowRight /></Link>} 

                    </div>
                </div>
            </div>
        </div>
    )
};

export default BlogPost;