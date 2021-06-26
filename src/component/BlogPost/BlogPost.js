import React from 'react';
import './BlogPost.css'

const BlogPost = () => {
    return (
        <div className="w-96 mx-6 mt-1 mb-10">
            <img src="https://media.sproutsocial.com/uploads/2019/09/how-to-write-a-blog-post.svg" alt="" className="w-full h-72 object-cover rounded-lg" />
            <div className="flex flex-col items-center">
                <div className="postCategories text-sm mt-3">
                    <span className="postCategory">Music</span>
                    <span className="postCategory">Life</span>
                </div>
                <span className="postTitle text-2xl mt-3 cursor-pointer font-bold">
                    Lorem, ipsum dolor
                </span>
                <hr />
                <span className="postDate text-sm italic mt-4">1 hour ago</span>
            </div>
            <p className="postDesciption text-base overflow-hidden overflow-ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, expedita ipsum. Dicta quaerat aliquam doloremque fugiat, odit cumque eos magnam, incidunt quis sequi rem! Quae saepe sapiente illo quaerat asperiores?
                Exercitationem impedit tempora illum pariatur necessitatibus, repellendus fuga explicabo ab magnam cupiditate cum excepturi incidunt facere dolorum nobis numquam, maxime praesentium quo? Doloremque temporibus rem architecto debitis. Mollitia, odit explicabo.
                Eos iusto dolorem nisi facilis architecto omnis alias deleniti quod excepturi, necessitatibus expedita accusantium deserunt hic dolor, ducimus minus commodi asperiores ex dicta consequatur delectus a? Fugiat voluptates eveniet voluptate.</p>
        </div>
    );
};

export default BlogPost;