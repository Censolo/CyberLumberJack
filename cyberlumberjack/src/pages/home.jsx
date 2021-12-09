import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Center } from "@chakra-ui/react";
import lottie from "lottie-web";

function Home() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../assets/lottie/growing.json"),
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Cyber Lumberjack</title>
      </Helmet>
      <div>
        <Center mt="20">
          <div className="container" ref={container}></div>
        </Center>
      </div>
    </div>
  );
}

export default Home;
