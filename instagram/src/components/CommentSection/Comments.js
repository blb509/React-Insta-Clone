import React from 'react';
import './CommentSection.css';

const Comments = props => {
    return <div className= "Comments">

        <div>{props.comments.map(comment => <div className="comment">
            <div className="commentUser">{comment.username}</div>
            <div className="commentText">{comment.text}</div>
            </div>)}
        </div>

       <div className='addComment'>
            <input type ="text" name="Comment" placeholder="Add a comment..."></input>
        </div>
    </div>
}

export default Comments;