import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { GrBlockQuote } from "@react-icons/all-files/gr/GrBlockQuote";
const Testimonial = ({ img, text, name }) => {
    return (
        <div className="px-3 md:w-1/3">
            <div className="w-full mx-auto rshadow-lg hover:shadow-2xl bg-white rounded-2xl bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-24 h-24 bg-gray-50 border border-gray-200">
                        <GatsbyImage
                            image={img}
                            className="w-24 h-24"
                            alt={name} />
                    </div>
                    <div className="flex-grow pl-3">
                        <h6 className="font-bold text-xl uppercase text-gray-600">
                            {name}
                            </h6>
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-lg leading-tight">
                        <span class="text-2xl leading-none italic font-bold text-gray-400 mr-1">
                            "
                        </span>
                        {text}
                        <span class="text-2xl leading-none italic font-bold text-gray-400 ml-1">
                            "
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Testimonial;