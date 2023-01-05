import SideBar from "../../components/sidebar/sidebar"
import "./settings.css"
import React, { Component }  from 'react';
export default function settings() {
    return (
        <>
        <div className="settings">
            <SideBar />
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle"> Edit Account</span>
                    <span className="settingsDeleteAccount"> Delete Account</span>
                    <form className="settingsForm">
                        <label> Profile picture</label>

                        <div className="settingsPfp">
                            <img src="/images/default_pfp.png"
                            alt=""
                            />
                            <label htmlFor="fileInput">
                                <i className="settingsPFPIcon fa-solid fa-upload"></i>

                            </label>
                            <input 
                                id="fileInput"
                                type="file"
                                style={{display: "none"}}
                                className="settingsPfpInput"
                                />
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="username" name="name" />
                        <label>Email</label>
                        <input type="email" placeholder="example@gmail.com" name="email" />
                        <label>Password</label>
                        <input type="password" placeholder="password" name="password" />
                        <button className="settingsUpdate" type = "submit">
                            Update
                        </button>
                    </form>
                
                
                </div>
            </div>
            </div>
        </>
    )
}