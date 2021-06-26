import React from 'react';
import './Topbar.css';

const Topbar = () => {
    return (
        <div className="top w-100 h-14 sticky top-0 flex items-center bg-white z-50">
            <div className="left flex items-center justify-center">
                <i class="topIcon fab fa-facebook-square"></i>
                <i class="topIcon fab fa-twitter-square"></i>
                <i class="topIcon fab fa-linkedin"></i>
                <i class="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="center">
                <ul className="flex justify-center m-0 p-0 list-none">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Logout</li>
                </ul>
            </div>
            <div className="right flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className='w-10 h-10 rounded-full object-cover' />
            </div>
        </div>
    );
};

export default Topbar;