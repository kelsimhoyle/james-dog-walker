import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Card = ({ img, content }) => {
    return (
        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                            <div className="w-sm">
                                <GatsbyImage className="w-64" image={img} alt="" />
                                <div className="mt-4 text-green-600 text-center">
                                    {/* <h1 className="text-xl font-bold">Communications</h1> */}
                                    <div
                                        className="mt-4 text-gray-600"
                                        dangerouslySetInnerHTML={{
                                            __html: content
                                        }}
                                    />
                                    <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                                </div>
                            </div>
                        </div>
    )
};

export default Card