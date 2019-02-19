import React from 'react';
import './PostContainer.css';

const PostPicture = props => {
    return  <div className="PostPicture">   
        <img className="mainPic" src={props.pic} alt="imported pic"/>
    </div>
}

export default PostPicture;