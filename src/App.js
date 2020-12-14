import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import Trend from "./routes/Trend";
import "./App.css";
import trends from "./db";

function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        {trends.map(trend => (
          <Route
            path={`/trend${trend.id + 1}`}
            render={() => (
              <Trend
                key={trend.id}
                rank={trend.rank}
                name={trend.name}
                period={trend.period}
                categories={trend.categories}
              />
            )}
          />
        ))}
        <Navigation />
      </HashRouter>
    </>
  );
}

export default App;
