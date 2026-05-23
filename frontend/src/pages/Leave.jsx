import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../styles/dashboard.css";
function Leave() {
  return (
   <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <Navbar />

        <div className="dashboard-body">

          <h1>Leave</h1>


        </div>

      </div>

    </div>
  );
}

export default Leave;
