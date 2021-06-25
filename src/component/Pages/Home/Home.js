import React from 'react';
import './Home.css';
import Header from '../../Header/Header';
import Posts from '../../Posts/Posts';
import Sidebar from '../../Sidebar/Sidebar';

const Home = () => {
    return (
        <>
            <Header />
            <div className="home flex">
                <Posts />
                <Sidebar />
            </div>
        </>
    );
};

export default Home;