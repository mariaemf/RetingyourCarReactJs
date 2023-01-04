import React from "react";
import CarStatsChart from "../charts/CarStatsChart";
import MileChart from "../charts/MileChart";
import SingleCard from "../components/reuseable/SingleCard";
import "../styles/dashboard.css";

const carObj = {
  title: "Total Cars",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Daily Trips",
  totalNumber: 1697,
  icon: "ri-steering-line",
};

const ClientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={ClientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>

        <div className="recommend__cars-wrapper">
          <div className="recommend__car-card">
            <div className="recommend__car-top">
              <h5>
                <span>
                  <i class="ri-restart-line"></i>
                </span>
                74% Recommended
              </h5>
            </div>

            <div className="recommend__car-img">
              <img src="../assets/images/mini-car-01.png" alt="" />
            </div>
            <div className="recommend__car-bottom">
              <h4>Mini Cooper</h4>
              <div className="recommend__car-other">
                <div>
                  <p>
                    <span>
                      <i class="ri-repeat-line"></i>
                    </span>{" "}
                    130k
                  </p>
                  <p>
                    <span>
                      <i class="ri-timer-flash-line"></i>
                    </span>
                  </p>
                </div>
                <span>$30/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
