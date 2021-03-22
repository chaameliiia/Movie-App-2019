import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import '../0318/App.css';

import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path={["/", "/tesT"]} exact component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path="/movie-detail" component={Detail} /> */}
      <Route path="/movie/:title" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
