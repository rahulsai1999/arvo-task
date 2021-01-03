import React from "react";
import Lottie from "react-lottie";
import animationData from "./ping-pong.json";

const LottieControl = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ marginTop: "2%", marginBottom: "2%" }}>
      <Lottie options={defaultOptions} height={250} width={250} />
    </div>
  );
};

export default LottieControl;
