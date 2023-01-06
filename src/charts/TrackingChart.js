import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import trackingData from "../assets/dummy-data/trackingData";

const TrackingChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <LineChart
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="0" stroke="#b7ffe913" />
        <XAxis dataKey="name" fill="#ddd" />
        <YAxis dataKey="mt" fill="#ddd" />

        <Line
          type="monotone"
          dataKey="km"
          data={trackingData}
          stroke="#e1424e"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TrackingChart;
