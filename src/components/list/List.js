import React from 'react'
import './list.css'
import UserInfo from './userInfo/Userinfo'
import UserList from './userList/UserList'

const List = ({ handleUserClick }) => {
  return(
    <div className='list'>
      <UserInfo />
      <UserList />
    </div>
  )
}

export default List