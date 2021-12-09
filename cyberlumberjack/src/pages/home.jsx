import React from "react";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
      <Helmet>
        <title>CyberLumberJack</title>
      </Helmet>
      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default Home;
