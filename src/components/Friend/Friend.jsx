import React from 'react';
import './Friend.css'

const Friend = ({friend}) => {
     console.log(friend);
     const {name, email, id, phone} = friend;
     return (
          <div className='friend'>
               <h2>Name: {name}</h2>
               <h3>Email: {email}</h3>
               <p>Phone: {phone}</p>
          </div>
     );
};

export default Friend;