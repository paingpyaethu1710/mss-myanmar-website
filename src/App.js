import React from "react";

import Navbar from "./components/organisms/Navbar/Navbar";
import { About, Banner, Client, Mission, Services } from "./pages";

import "./App.scss";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <About />
      <Mission />
      <Services />
      <Client />
      <Contact />
    </div>
  );
};

export default App;
