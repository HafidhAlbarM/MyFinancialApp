import React from "react";
import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="other">
          <FeaturedInfo />
          {/* <Chart/> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
