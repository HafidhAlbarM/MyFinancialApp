import React from "react";
import "./incomes.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Incomes = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div
          className="other"
          style={{
            height: "100vh",
            backgroundImage: `url(
          "${process.env.REACT_APP_BASE_URL}/background.jpg"
        )`,
            backgroundSize: "cover",
          }}
        >
          <div className="card">
            <div class="header">
              <span className="title">Income</span>
            </div>
            <div className="form">
              <form action="/action_page.php">
                <label for="incomeName">Income Name</label>
                <input
                  type="text"
                  id="incomeName"
                  name="incomeName"
                  placeholder="Your income name.."
                />

                <label for="incomeAmount">Income Amount</label>
                <input type="number" name="incomeAmount" id="incomeAmount" />

                <input type="submit" value="Save" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incomes;
