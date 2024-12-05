import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          "https://job-portal-1-bdk6.onrender.com/api/hiring-managers/dashboard",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {data ? <p>Welcome, {data.email}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;
