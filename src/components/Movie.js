import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
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

function mean(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += parseFloat(arr[i].index);
  }
  return result / arr.length;
}

function Movie({ rank, name, period, categories, emo, data }) {
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
    <div className="movie">
      <div className="movie__data">
        <h3 className="movie__title">
          Rank {rank} {emo} {name}
        </h3>
        <ul className="movie__genres">
          Category :
          {categories.map((genre, index) => (
            <li key={index} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <h5 className="movie__year">{period}</h5>
      </div>
      <div class="movie__chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 30, right: 30, left: 7, bottom: 40 }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
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

            {/* <ReferenceLine x="2019.11.13" stroke="blue" strokeDasharray="3 3" /> */}
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
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
