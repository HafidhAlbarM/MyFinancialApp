import React from "react";
import "./expenses.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Expenses = () => {
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
              <span className="title">Expenses</span>
            </div>
            <div className="form">
              <form action="/action_page.php">
                <label for="expenseName">Expense Name</label>
                <input
                  type="text"
                  id="expenseName"
                  name="expenseName"
                  placeholder="Your expense name.."
                />

                <label for="expenseAmount">Expense Amount</label>
                <input type="number" name="expenseAmount" id="expenseAmount" />

                <input type="submit" value="Save" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
