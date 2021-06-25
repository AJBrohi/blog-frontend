import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header mt-14">
            <div className="headerTitles flex flex-col items-center">
                <span className="headerTitleSm absolute text-xl">React and Node</span>
                <span className="headerTitleLg absolute text-8xl">Blog</span>
            </div>
            <img src="https://s3.amazonaws.com/startupcollective-com/wp-content/uploads/20150803150028/Company-Blog-675x320.jpg" alt="" className="headerImg w-full mt-20 object-cover" />
        </div>
    );
};

export default Header;