import "./writePost.css"
import React, { Component }  from 'react';
export default function WritePost(){
    return(
        <>
            <div className="writePost">
                <img className="writeImage" src="/images/background.jpg" alt="" />
                <form className="writePostForm">
                    <div className="writePostGroup">
                        <input
                            type="text"
                            placeholder="title"
                            className="writePostInput"
                            autoFocus={true}
                            />
                            <label htmlFor="fileInput"></label>
                            <i class="writePostIcon fa-duotone fa-plus"></i>
                            <input
                                type="file"
                                id="fileInput"
                                style={{display: "none"}}
                                />


                    </div>
                    <div className="writePostGroup">
                        <textarea
                            placeholder="type here"
                            type="text"
                            className="writePostInput writePostText"
                            ></textarea>
                            <br />
                    </div>
                    <button className="writePostSubmit" type="submit"> Post </button>
                    
                </form>
            </div>
        </>
    )
}