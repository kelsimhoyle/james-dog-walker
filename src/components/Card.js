import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Card = ({ img, content, btn, title }) => {
    return (
        <div className="mt-4 md:mt-10 py-4 px-4 bg-whit w-96 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="w-sm flex mx-auto flex-col justify-center">
                <GatsbyImage  className="w-80  mx-auto" image={img} alt="" />
                <div className="mt-4 text-green-600 text-center">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <div
                        className="mt-4 text-gray-600"
                        dangerouslySetInnerHTML={{
                            __html: content
                        }}
                    />
                    {btn ? (
                        <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>) : null}
                </div>
            </div>
        </div>
    )
};

export default Card