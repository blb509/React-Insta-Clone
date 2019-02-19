import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    return  <div className="PostHeader">   
       <img className="thumbnail" src={props.thumbnail} alt ="user thumbnail"/>
       <div className="user">{props.username}</div>
    </div>
}

export default PostHeader;