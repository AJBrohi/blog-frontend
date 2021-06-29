import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
    const user = false;
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
                    <li className="topListItem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="topListItem"><Link to="/">About</Link></li>
                    <li className="topListItem"><Link to="/">Contact</Link></li>
                    <li className="topListItem"><Link to="/write">Write</Link></li>
                    <li className="topListItem">{user && 'Logout'}</li>
                </ul>
            </div>
            <div className="right flex items-center justify-center">
                {user ? (<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className='w-10 h-10 rounded-full object-cover' />) : (<Link className="topListItem" to="/login">Login</Link>)}

            </div>
        </div>
    );
};

export default Topbar;