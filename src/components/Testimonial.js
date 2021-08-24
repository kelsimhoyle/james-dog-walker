import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { GrBlockQuote } from "@react-icons/all-files/gr/GrBlockQuote";
const Testimonial = ({ img, text, name }) => {
    return (
        <div className=" md:h-80 md:mb-10">
            <div className="shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 bg-green-400 p-10 rounded text-white w-3/5 md:relative mt-20 mx-auto ">
            <div className="relative m h-32 md:absolute md:-top-20 md:right-80">
                    <GatsbyImage
                        className="absolute -inset-1/2  md:-inset-0 mx-auto rounded-full h-48 w-48 md:h-80 md:w-80 "
                        image={img}
                        alt={name} />
                </div>
                <div>
                    <GrBlockQuote className="h-6 w-6" />
                    <p className="text-lg	">{text}</p>
                    <p className="italic	"> - {name}</p>
                </div>
                
            </div>

        </div>
    )
};

export default Testimonial;