import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader';
import PostPicture from './PostPicture';
import CommentSection from '../CommentSection/CommentSection';

const Posts = props => {
    return  <div className="Posts">   
            <PostHeader thumbnail = {props.post.thumbnailUrl}
            username = {props.post.username}/>
            <PostPicture  pic= {props.post.imageUrl}/>
            <CommentSection likes = {props.post.likes}
            comments = {props.post.comments}/>
    </div>
}

export default Posts;