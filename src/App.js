import React from "react";
import './App.css';

//Components;
import {Route} from 'react-router-dom';
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Route component = {Admin} path ="/admin" />
      <Route component = {Blog} path ="/blog/:blogId" />
      <Route component = {About} path ="/about" />
      <Route component = {Home} path ="/" exact />
    </div>
  );
}

export default App;
