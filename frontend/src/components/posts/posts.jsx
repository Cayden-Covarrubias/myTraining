import "./posts.css"
import Post from "../post/post";
import React, { Component }  from 'react';
export default function Posts() {
    return (
        <div className="posts">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}