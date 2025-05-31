import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true },
        background: {
          color: { value: "#0f172a" }, // dark background
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff", // snow color
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: { min: 2, max: 5 },
            random: true,
          },
          move: {
            enable: true,
            direction: "bottom",
            speed: 1,
            outModes: {
              default: "out",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
