import React from "react";
import { Link } from "gatsby";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft"
import Seo from "../components/Seo";

const BlogPost = ({ pageContext: { title, post, keywords } }) => {
    return (
        <>
            <Seo
                title={title}
                keywords={keywords}
            />
            <div className="container max-w-5xl mx-auto">
                <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal mt-4" >
                    <h3 className="uppercase text-2xl md:text-3xl mb-5 text-green-500 font-bold">{title}</h3>
                    <div
                        className="mt-4 text-gray-600 space-y-6"
                        dangerouslySetInnerHTML={{
                            __html: post.childMarkdownRemark.html,
                        }}
                    />

                </div>
                <Link to="/blog" className="text-xl text-gray-500 hover:text-gray-900 flex items-center m-10"><FaArrowLeft /> View All Posts</Link>
            </div>
        </>
    );
};

export default BlogPost;