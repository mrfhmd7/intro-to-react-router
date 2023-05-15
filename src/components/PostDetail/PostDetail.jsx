import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
     const post = useLoaderData();
     // console.log(post);
     const {id, userId, title, body} = post;
     const navigate = useNavigate();

     const handleGoBack = () => {
          navigate(-1)
     }
     return (
          <div>
               <h2>Detail about you post: {id} </h2>
               <h4>{title}</h4>
               <p>{body}</p>
               <button onClick={handleGoBack}>Go back</button>
          </div>
     );
};

export default PostDetail;