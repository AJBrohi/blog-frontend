import React from 'react';
import './WriteBlogs.css';

const WriteBlogs = () => {
  return (
    <div className="writeBlogs pt-14">
      <img src="https://s3.amazonaws.com/startupcollective-com/wp-content/uploads/20150803150028/Company-Blog-675x320.jpg" alt="" className="writeImage ml-40 h-30 object-cover rounded-lg" />
      <form action="" className="writeBlogsForm relative">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="flex items-center justify-center w-6 h-6 rounded-full border-2 border-solid text-base text-gray-500 cursor-pointer fas fa-plus"></i>
          </label>
          <input type="file" id='fileInput' className="hidden" />
          <input type="text" placeholder="Title" className='writeInput' autofocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story..." type="text" className="writeInput writeText text-xl h-screen"></textarea>
        </div>
        <button className="writeSubmit absolute top-5 right-12 text-white p-2.5 rounded-lg border-none cursor-pointer text-base">Publish</button>
      </form>
    </div>
  );
};

export default WriteBlogs;