import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = () => {
     const friend = useLoaderData();
     // console.log(friend);
     return (
          <div className='friend-detail'>
               <h2>Name: {friend.name}</h2>
               <h4>Website:{friend.website}</h4>
               <h5>Email: {friend.email}</h5>
               <p>Phone: {friend.phone}</p>
          </div>
     );
};

export default FriendDetail;