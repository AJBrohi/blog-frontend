import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login flex flex-col justify-center items-center h-screen">
            <span className="text-5xl">Login</span>
            <form className="loginForm mt-4 flex flex-col w-96">
                <label>Email</label>
                <input type="email" className="loginInput" id="" placeholder="Enter Your Email" />

                <label>Password</label>
                <input type="password" className="loginInput" id="" placeholder="Enter Your Password" />
                <Link to="/" className="loginButton mt-4 cursor-pointer border-none text-white rounded-md p-2 text-center">
                    <button >
                        Login
                    </button>
                </Link>

            </form>
        </div>
    );
};

export default Login;