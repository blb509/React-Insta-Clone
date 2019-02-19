import React from 'react';
import './CommentSection.css';
import Likes from './Likes';
import Comments from './Comments';

const CommentSection = props => {
    return <div className= "CommentSection">
        <Likes likes={props.likes}/>
        <Comments comments={props.comments}/>
    </div>
}

export default CommentSection;