import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
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

function Movie({ rank, name, period, categories, emo }) {
  return (
    <div className="movie">
      <div className="movie__data">
        <h3 className="movie__title">
          Rank {rank} {emo} {name}
        </h3>
        <ul className="movie__genres">
          [Category]
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
            margin={{ top: 20, right: 30, left: 0, bottom: 30 }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="period" angle={-30} textAnchor="end" />
            <YAxis />
            <Tooltip />
            <Legend align="center" verticalAlign="top" />
            <Line type="Linear" dataKey="index" stroke="#8884d8" dot={false} />
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
