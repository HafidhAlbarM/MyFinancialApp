import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { Home, ArrowForward, Computer, Archive } from "@material-ui/icons/";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useState } from "react";

const dataMenu = [
  {
    name: "Dashboard",
    id: "dashboard",
    icon: <Home className="sidebarIcon" />,
    link: "/",
  },
  {
    name: "Master Data",
    id: "master",
    icon: <Computer className="sidebarIcon" />,
    link: "",
    submenu: [
      {
        name: "Incomes",
        id: "incomes",
        icon: <ArrowForward className="sidebarIcon" />,
        link: "/incomes",
      },
      {
        name: "Expenses",
        id: "expenses",
        icon: <ArrowForward className="sidebarIcon" />,
        link: "/expenses",
      },
    ],
  },
  {
    name: "Transactions",
    id: "transactionc",
    icon: <AttachMoneyIcon className="sidebarIcon" />,
    link: "",
    submenu: [
      {
        name: "Incomes",
        id: "incomes",
        icon: <ArrowForward className="sidebarIcon" />,
        link: "",
      },
      {
        name: "Expenses",
        id: "expenses",
        icon: <ArrowForward className="sidebarIcon" />,
        link: "",
      },
    ],
  },
  {
    name: "Reports",
    id: "reports",
    icon: <Archive className="sidebarIcon" />,
    link: "",
  },
];

const Sidebar = () => {
  const [currentMenuOpened, setCurrentMenuOpened] = useState("");

  const handleClick = (dropdownId) => {
    if (currentMenuOpened.length != 0 && currentMenuOpened != dropdownId) {
      var dropdown = document.getElementById(currentMenuOpened);
      var dropdownContent = dropdown.nextElementSibling;

      dropdownContent.style.maxHeight = "0px";
    }

    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("active");

    var dropdownContent = dropdown.nextElementSibling;
    if (dropdownContent.style.maxHeight === "100px") {
      dropdownContent.style.maxHeight = "0px";
    } else {
      dropdownContent.style.maxHeight = "100px";
    }

    setCurrentMenuOpened(dropdownId);
    console.log(currentMenuOpened);
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebarWrapper" id="sidebarWrapper">
        {dataMenu.map((menu) => {
          return (
            <div className="sidebarMenu">
              <ul className="sidebarList">
                <li
                  className="sidebarListItem dropdownList"
                  onClick={() => handleClick(menu.id)}
                >
                  <Link
                    class="dropdown-btn sidebarTitle"
                    id={menu.id}
                    to={menu.link.length > 0 ? `${menu.link}` : "#"}
                  >
                    {menu.icon}
                    {menu.name}
                  </Link>
                  <div class="dropdown-container">
                    {menu.submenu
                      ? menu.submenu.map((submenu) => {
                          return (
                            <Link
                              className="dropdownListItem"
                              to={submenu.link}
                            >
                              {submenu.name}
                            </Link>
                          );
                        })
                      : ""}
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
