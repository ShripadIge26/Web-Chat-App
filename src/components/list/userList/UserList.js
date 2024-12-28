import React from 'react';
import { init, useQuery } from '@instantdb/react';
import './userList.css';


const db = init({
  appId: "361e1b0e-f452-4bab-b460-a2a34a13cb00", 
  // appId: "b5f1e5e3-6c9c-43e4-a00c-49155d437746", 
});

const UserList = () => {
  // Query users from the database
  const { isLoading, error, data } = db.useQuery({ chatapp: {} });
// data?.chatapp?.map((a)=>console.log(a.id))
const handleClick = (userId) => {
    sessionStorage.setItem('selectedUser', JSON.stringify(userId));
    console.log(userId)
  };


  // Show loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle errors while fetching
  if (error) return <div>Error fetching users: {error.message}</div>;



  return (
    <div className="userList">
      {/* Search Input */}
      <div className="search">
        <div className="search-wrap">
          <input type="text" className="search-input" placeholder="Search" />
          <div className="search-icon-wrap">
            <img src="images/search-icon.svg" className="search-icon" alt="Search Icon" />
          </div>
        </div>
      </div>

      {/* List of Users */}
      <div className="user-items">
        {data?.chatapp?.map((user) => (
            
          <div className="item" key={user.id} onClick={() => handleClick(user)} style={{cursor:'pointer'}}>
            <img
              src={user.profileImage || 'images/profile-placeholder-icon.svg'}
              className="user-profile-image"
              alt="User Profile"
            />
            <div className="texts">
              <span className="user-item-name">{user.username}</span>
              <p className="item-last-message">{user.lastMessage || 'No messages yet'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
