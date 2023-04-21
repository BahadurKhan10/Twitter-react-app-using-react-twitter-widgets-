import React from "react";
import {Follow } from "react-twitter-widgets";
import "../App.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <i className="fab fa-twitter"></i>
        <span> Twitter</span>
      </div>
      <div className="sidebar__buttons">
        <div className="sidebar__button active">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </div>
        <div className="sidebar__button">
          <i className="fas fa-hashtag"></i>
          <span>Explore</span>
        </div>
        <div className="sidebar__button">
          <i className="far fa-bell"></i>
          <span>Notifications</span>
        </div>
        <div className="sidebar__button">
          <i className="far fa-envelope"></i>
          <span>Messages</span>
        </div>
        <div className="sidebar__button">
          <i className="far fa-bookmark"></i>
          <span>Bookmarks</span>
        </div>
        <div className="sidebar__button">
          <i className="far fa-list-alt"></i>
          <span>Lists</span>
        </div>
        <div className="sidebar__button">
          <i className="far fa-user"></i>
          <span>Profile</span>
        </div>
        <div className="sidebar__button">
          <i className="fas fa-ellipsis-h"></i>
          <span>More</span>
        </div>
        <div className="sidebar__button">
          <Follow
            username="elonmusk"
            options={{
              size: "large",
              showCount: false,
              showScreenName: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};


export default Sidebar;