import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";

const FaqComponent = ({ question, answer }) => {
    return (
        <Disclosure as="div" className="mt-2">
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-green-700 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                        <span>{question}</span>
                        <FaChevronUp
                            className={`${open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-green-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-500">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: answer
                            }}
                        />
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default FaqComponent;