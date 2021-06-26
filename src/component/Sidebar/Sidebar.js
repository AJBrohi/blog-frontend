import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar m-5 pb-7 rounded-lg flex flex-col items-center">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, illum? Quod explicabo culpa facilis recusandae asperiores a, veniam dolores. Culpa, magnam. Magnam repellat voluptatum unde possimus aliquid consectetur perferendis dignissimos.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList list-none mb-7">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Me</span>
                <div className="sidebarSocial mt-4 w-60 flex items-center justify-center">
                    <i class="sidebarIcon fab fa-facebook-square"></i>
                    <i class="sidebarIcon fab fa-twitter-square"></i>
                    <i class="sidebarIcon fab fa-linkedin"></i>
                    <i class="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;