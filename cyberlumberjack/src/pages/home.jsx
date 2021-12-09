import React from "react";
import { Helmet } from "react-helmet-async";
import { Center } from "@chakra-ui/react";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Cyber Lumberjack</title>
      </Helmet>
      <div>
        <Center mt="20">
          <h1>Animation here</h1>
        </Center>
      </div>
    </div>
  );
}

export default Home;
