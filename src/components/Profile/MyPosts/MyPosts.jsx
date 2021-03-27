import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElements = props.posts.map(post =>
        <Post message={post.message} likeCount={post.likeCount} key={post.id}/>)
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (
    <div className={c.posts}>
        <div>
            <textarea placeholder="Enter your post" onChange={onPostChange}
                      value={props.newPostText}></textarea>
            <button onClick={onAddPost}>Add post</button>
        </div>
        {postElements}
    </div>
    )}
export default MyPosts;