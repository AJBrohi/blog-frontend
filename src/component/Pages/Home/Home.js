import React from 'react';
import './Home.css';
import Header from '../../Header/Header';
import AllPost from '../../AllPost/AllPost';
import Sidebar from '../../Sidebar/Sidebar';

const Home = () => {
    return (
        <>
            <Header />
            <div className="home flex">
                <AllPost />
                <Sidebar />
            </div>
        </>
    );
};

export default Home;