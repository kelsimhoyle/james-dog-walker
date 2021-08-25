import React from "react";
import { Link } from "gatsby";


const TwoCta = ({one, two}) => {
    return (
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
            <Link to={one.href} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-600 md:py-4 md:text-lg md:px-10">
                {one.text}
            </Link>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link to={two.href} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                {two.text}
            </Link>
        </div>
    </div>
    )
};

export default TwoCta;
