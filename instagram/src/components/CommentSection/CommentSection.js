import React from 'react';
import './CommentSection.css';
import Likes from './Likes';
import Comments from './Comments';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            likes: props.likes,
            comment: ''
        }
    }

    addLike = e => {
        const newLikes = this.state.likes + 1;
        this.setState({likes: newLikes});
    };

    addNewComment = e => {
        e.preventDefault();
        const newComment = { username: "You", text: this.state.comment };
        const comments = [...this.state.comments];
        comments.push(newComment);
        this.setState({comments, comment: '' });
      };

      handleChanges = e => {
        this.setState({[e.target.name]: e.target.value})
      };

    render(){
        return <div className= "CommentSection">
            <Likes likes={this.state.likes}
            addLike={this.addLike}/>
            <Comments comments={this.state.comments}
            addNewComment ={this.addNewComment}
            handleChanges= {this.handleChanges}
            comment= {this.state.comment}/>
        </div>
    }
}

export default CommentSection;