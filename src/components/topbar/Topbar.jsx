import React from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
  ArrowBackIos,
} from "@material-ui/icons/";
import { useState } from "react";

const Topbar = () => {
  let [isSidebarOpened, setIsSidebarOpened] = useState(true);

  const handleClick = () => {
    const sidebar = document.getElementById("sidebar");

    if (isSidebarOpened) {
      sidebar.style.display = "none";

      setIsSidebarOpened(false);
    } else {
      sidebar.style.display = "block";

      setIsSidebarOpened(true);
    }
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">My Financial App</span>
          <span className="arrowLeft">
            <ArrowBackIos
              onClick={() => {
                handleClick();
              }}
            />
          </span>
        </div>
        <div className="topRight">
          <div className="topBarIconsContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconsContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconsContainer">
            <Settings />
            <span className="topIconBadge">2</span>
          </div>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/profilepicture.jpg`}
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
