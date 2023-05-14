import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
     console.log(friend);
     const {name, email, id, phone} = friend;
     return (
          <div className='friend'>
               <h2>Name: {name}</h2>
               <h3>Email: {email}</h3>
               <p>Phone: {phone}</p>
               <p><Link to={`/friend/${id}`}>Show me details about this friend</Link></p>
          </div>
     );
};

export default Friend;