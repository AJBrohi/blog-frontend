import React from 'react';
import './SingleBlogPost.css';
import Sidebar from '../../Sidebar/Sidebar';
import Blog from '../../Blog/Blog';

const SingleBlogPost = () => {
    return (
        <div className="singleBlogPost flex">
            <Blog />
            <Sidebar />
        </div>
    );
};

export default SingleBlogPost;