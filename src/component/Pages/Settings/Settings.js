import React from 'react';
import './Settings.css';
import Sidebar from '../../Sidebar/Sidebar';

const Settings = () => {
    return (
        <div className='settings flex'>
            <div className="settingsWrapper p-4">
                <div className="flex items-center justify-between">
                    <span className="settingsUpdateTitle text-3xl mb-5">Update</span>
                    <span className="settingsDeleteTitle text-sm cursor-pointer">Delete</span>
                </div>
                <form className="settingsForm flex flex-col">
                    <label>Profile Picture</label>
                    <div className="flex items-center mx-2.5 my-0">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="w-20 h-20 rounded-lg object-cover" />
                        <label htmlFor="fileInput">
                            <i class="settingsProfilePictureIcon w-6 h-6 rounded-full text-white flex items-center justify-center cursor-pointer far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" className='hidden' />
                    </div>

                    <label>Username</label>
                    <input type="text" placeholder='AJBrohi' />

                    <label>Email</label>
                    <input type="email" placeholder='brohi96@gmail.com' />

                    <label>Passowrd</label>
                    <input type="password" />

                    <button className="settingsSubmit w-40 self-center border-none rounded-lg text-white p-2.5 mt-5 cursor-pointer">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
};

export default Settings;