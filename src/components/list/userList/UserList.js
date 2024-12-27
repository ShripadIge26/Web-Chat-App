import React from 'react'
import './userList.css'

const UserList = () => {
    return (
        <div className='userList'>
            <div className='search'>
                <div className='search-wrap'>
                    <input type='text' className='search-input' placeholder='Search' />
                    <div className='search-icon-wrap'>
                        <img src='images/search-icon.svg' className='search-icon' />
                    </div>
                </div>

            </div>
            <div className='user-items'>
                <div className='item'>
                    <img src='images/profile-placeholder-icon.svg' className='user-profile-image'/>
                    <div className='texts'>
                        <span className='user-item-name'>Shreyas Partwalkar</span>
                        <p className='item-last-message'>Some text here for placeholder</p>
                    </div>
                </div>
                <div className='item'>
                    <img src='images/profile-placeholder-icon.svg' className='user-profile-image'/>
                    <div className='texts'>
                        <span className='user-item-name'>Anushka Topde</span>
                        <p className='item-last-message'>Some text here for placeholder</p>
                    </div>
                </div>
                <div className='item'>
                    <img src='images/profile-placeholder-icon.svg' className='user-profile-image'/>
                    <div className='texts'>
                        <span className='user-item-name'>Nitin goud</span>
                        <p className='item-last-message'>Some text here for placeholder</p>
                    </div>
                </div>
                <div className='item'>
                    <img src='images/profile-placeholder-icon.svg' className='user-profile-image'/>
                    <div className='texts'>
                        <span className='user-item-name'>Abhishek Talkokul</span>
                        <p className='item-last-message'>Some text here for placeholder</p>
                    </div>
                </div>
                <div className='item'>
                    <img src='images/profile-placeholder-icon.svg' className='user-profile-image'/>
                    <div className='texts'>
                        <span className='user-item-name'>Abhishek Talkokul</span>
                        <p className='item-last-message'>Some text here for placeholder</p>
                    </div>
                </div>
                <div className='item'>
                    <img src='images/profile-placeholder-icon.svg' className='user-profile-image'/>
                    <div className='texts'>
                        <span className='user-item-name'>Abhishek Talkokul</span>
                        <p className='item-last-message'>Some text here for placeholder</p>
                    </div>
                </div>
                <div className='item'>
                    <img src='images/profile-placeholder-icon.svg' className='user-profile-image'/>
                    <div className='texts'>
                        <span className='user-item-name'>Abhishek Talkokul</span>
                        <p className='item-last-message'>Some text here for placeholder</p>
                    </div>
                </div>
                <div className='item'>
                    <img src='images/profile-placeholder-icon.svg' className='user-profile-image'/>
                    <div className='texts'>
                        <span className='user-item-name'>Abhishek Talkokul</span>
                        <p className='item-last-message'>Some text here for placeholder</p>
                    </div>
                </div>
                <div className='item'>
                    <img src='images/profile-placeholder-icon.svg' className='user-profile-image'/>
                    <div className='texts'>
                        <span className='user-item-name'>Abhishek Talkokul</span>
                        <p className='item-last-message'>Some text here for placeholder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserList