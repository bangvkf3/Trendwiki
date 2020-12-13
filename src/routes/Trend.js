import React from "react";
import "./Trend.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = require("../output/data3.json");

function Trend({ rank, name, period, category }) {
  return (
    <section className="trend-container">
      <div className="trend__board">
        <div className="trend__name">{name}</div>
        <div className="trend__rank">{rank}</div>
        <div className="trend__period">{period}</div>
        <div className="trend__category">{category}</div>
        <div className="trend__graph">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 40, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="Linear"
                dataKey="index"
                stroke="#8884d8"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="trend__comment">
        <script
          src="https://utteranc.es/client.js"
          repo="bangvkf3/blog-comments"
          issue-term="pathname"
          theme="github-light"
          crossorigin="anonymous"
          async
        ></script>
      </div>
    </section>
  );
}

export default Trend;
