import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = require("../output/data3.json");

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <div className="movie__data">
        <h3 className="movie__title">Trend</h3>
        <h5 className="movie__year">기간~기간</h5>
        <ul className="movie__genres">카테고리</ul>
        <p className="movie__summary">
          ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴ어리;ㄴㅁ얼;ㅣ머ㅣ낭러ㅣ;ㄴ얼;ㅣㅓㅁ니어링머니ㅓ리ㅓㄴ미러ㅣ
        </p>
      </div>
      <div class="movie__chart">
        <LineChart
          width={325}
          height={200}
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 10 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="period" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="Linear" dataKey="index" stroke="#8884d8" dot={false} />
        </LineChart>
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
