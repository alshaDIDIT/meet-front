import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./Pages/Layout/Layout";
import {Home} from "./Pages/Home";
import {Event} from "./Pages/Event";
import {About} from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={'/event'} element={<Event />} />
            <Route path={'/about'} element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
