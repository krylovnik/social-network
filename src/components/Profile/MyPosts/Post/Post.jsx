import React from 'react';
import c from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <img className={c.avatar} src="/img/profile_img.png" alt="avatar"/>
            {props.message}
            <div>like {props.likeCount}</div>
        </div>
    )}
export default Post;