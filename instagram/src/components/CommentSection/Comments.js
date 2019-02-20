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
        <form onSubmit = {props.addNewComment}>
            <input type ="text"
                name="comment"
                placeholder="Add a comment..."
                value = {props.comment}
                onChange = {props.handleChanges}
            />
        </form>
        </div>
    </div>
}

export default Comments;