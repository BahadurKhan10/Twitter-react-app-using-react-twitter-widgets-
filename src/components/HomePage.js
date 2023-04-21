import Sidebar from "./Sidebar";
import React from "react";
import { Timeline} from "react-twitter-widgets";
import "../App.css";

const HomePage = () => {
    return (
      <div className="home-page">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="timeline-container">
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "FIFAcom", //change screenName to any twitter username
            }}
            options={{
              username: "Twitter",
              height: "1000",
            }}
          />
        </div>
      </div>
    );
  };
  
  export default HomePage;