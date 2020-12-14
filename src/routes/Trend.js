import React from "react";
import PropTypes from "prop-types";
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
import ReactUtterences from "react-utterances";

const data = require("../output/data3.json");
const repo = "bangvkf3/blog-comments";

function Trend({ rank, name, period, categories }) {
  return (
    <section className="trend-container">
      <div className="trend__board">
        <div className="trend__rank">Rank #{rank}</div>
        <h3 className="trend__name">{name}</h3>
        <ul className="trend__categories">
          {categories.map((category, index) => (
            <li key={index} className="categories__category">
              {category}
            </li>
          ))}
        </ul>
        <h5 className="trend__period">{period}</h5>
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
        <ReactUtterences repo={repo} type={"issue-number"} issueNumber={rank} />
      </div>
    </section>
  );
}

Trend.propTypes = {
  id: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Trend;
