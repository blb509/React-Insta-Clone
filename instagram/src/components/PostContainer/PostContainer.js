import React from 'react';
import './PostContainer.css';
import Posts from './Posts';

const PostContainer = props => {
    return <div className= "PostContainer">
    {props.dummy.map(post=> <Posts post={post} key={post.timestamp}/>)}
    </div>
}

export default PostContainer;