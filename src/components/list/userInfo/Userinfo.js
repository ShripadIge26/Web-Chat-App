import React from "react";
import "./userInfo.css";

const Userinfo = () => {
    return (
        <div className="userInfo">
            <div className="user">
                <img src="/images/profile-placeholder-icon.svg" className="profile-image"/>
                <div className="userName">
                    <span className="userName-head">Shripad Ige</span>
                    <p className="userName-designation">@CEO</p>
                </div>
            <div className="notification-indication">
                <img src="/images/notification-icon.svg" className="notification-icon"/>
            </div>
            </div>
        </div>
    );
};

export default Userinfo;
