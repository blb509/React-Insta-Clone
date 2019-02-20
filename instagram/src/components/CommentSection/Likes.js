import React from 'react';
import './CommentSection.css';

const Likes = props => {
    return <div className= "Likes">
      <div className="likeIcons">
        <i class="far fa-heart fa-lg" onClick={props.addLike}></i>
        <i class="far fa-comment fa-lg"></i>
      </div>
      <div>{props.likes} likes</div>
    </div>
}

export default Likes;