import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import './AllPost.css';

const AllPost = () => {
  return <div className="all-post flex flex-wrap m-5">
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost />
  </div>;
};

export default AllPost;