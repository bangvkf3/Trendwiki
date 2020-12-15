import React from "react";
import PropTypes from "prop-types";
import "./Trend.css";
import {
  ReferenceLine,
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

function mean(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += parseFloat(arr[i].index);
  }
  return result / arr.length;
}

const repo = "bangvkf3/blog-comments";

function Trend({ rank, name, period, categories, data }) {
  const series = [
    {
      name: "Train index",
      data: data.slice(5, 737),
    },
    {
      name: "Generated index",
      data: data.slice(736, 1132),
    },
  ];
  const UL = mean(data.slice(366, 731));
  return (
    <section className="trend-container">
      <div className="trend__board">
        <div className="trend__rank">Rank #{rank}</div>
        <h3 className="trend__name">{name}</h3>
        <ul className="trend__categories">
          Category :
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
              margin={{ top: 30, right: 30, left: 5, bottom: 30 }}
            >
              <XAxis
                dataKey="period"
                angle={-30}
                textAnchor="end"
                interval="preserveStartEnd"
                minTickGap={0}
                allowDuplicatedCategory={false}
              />
              <YAxis
                type="number"
                domain={[0, dataMax => Math.floor(dataMax) + 10]}
              />

              <Tooltip />
              <Legend align="center" verticalAlign="top" height="40px" />
              {/* <Line type="Linear" dataKey="index" stroke="#8884d8" dot={false} /> */}
              <Line
                type="Linear"
                data={series[0].data}
                dataKey="index"
                stroke="#82ca9d"
                dot={false}
                name={series[0].name}
                key={series[0].name}
              />
              <Line
                type="Linear"
                data={series[1].data}
                dataKey="index"
                stroke="#248BD6"
                dot={false}
                name={series[1].name}
                key={series[1].name}
              />
              {/* <ReferenceLine
                x="2019.11.13"
                stroke="blue"
                strokeDasharray="3 3"
              /> */}
              <ReferenceLine
                x="2020.1.1"
                stroke="orange"
                strokeDasharray="3 3"
                label={{
                  position: "top",
                  value: "2020.1.1",
                  fill: "orange",
                  fontSize: 14,
                }}
              />
              <ReferenceLine
                x="2019.1.1"
                stroke="orange"
                strokeDasharray="3 3"
                label={{
                  position: "top",
                  value: "2019.1.1",
                  fill: "orange",
                  fontSize: 14,
                }}
              />
              <ReferenceLine
                x="2018.1.1"
                stroke="orange"
                strokeDasharray="3 1"
                label={{
                  position: "top",
                  value: "2018.1.1",
                  fill: "orange",
                  fontSize: 14,
                }}
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
