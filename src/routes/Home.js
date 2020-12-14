import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
import trends from "../db";

const data = require("../output/data3.json");

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    jsonArray: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
    // console.log(movies.data.data.movies);
    this.setState({ movies, isLoading: false });
  };

  // getCsv = async () => {
  //   const data = await readString()
  // }
  componentDidMount() {
    this.getMovies();
    console.log(data);
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {trends.map(trend => (
              <Movie
                key={trend.id}
                rank={trend.rank}
                name={trend.name}
                period={trend.period}
                categories={trend.categories}
                emo={trend.emo}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
