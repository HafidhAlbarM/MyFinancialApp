import React from "react";
import "./featuredinfo.css";

import { ArrowDownward, ArrowUpward } from "@material-ui/icons/";

const FeaturedInfo = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(
          "${process.env.REACT_APP_BASE_URL}/background.jpg"
        )`,
        backgroundSize: "cover",
      }}
    >
      <div className="featured">
        <div className="featuredItem">
          <div className="featuredItemTitle">Your Balance</div>
          <div className="featuredItemMoneyContainer">
            <span className="featuredMoney">Rp. 50.000.000</span>
            <span className="featuredMoneyRate">
              -8.7 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compare to last month</span>
        </div>
      </div>
      <div className="featured">
        <div className="featuredItem">
          <div className="featuredItemTitle">This Month's Expense</div>
          <div className="featuredItemMoneyContainer">
            <span className="featuredMoney">Rp. 630.000</span>
            <span className="featuredMoneyRate">
              +8.7 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Compare to last month</span>
        </div>

        <div className="featuredItem">
          <div className="featuredItemTitle">This Month's Income</div>
          <div className="featuredItemMoneyContainer">
            <span className="featuredMoney">Rp. 3.600.000</span>
            <span className="featuredMoneyRate">
              -8.7 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compare to last month</span>
        </div>
      </div>
      <div className="featured">
        <div className="featuredItem">
          <div className="featuredItemTitle">Gold Assets</div>
          <div className="featuredItemMoneyContainer">
            <span className="featuredMoney">35 grams</span>
            <span className="featuredMoneyRate">
              -8.7 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compare to last month</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
