import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "fixed",
        zIndex: 0,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      options={{
        fullScreen: { enable: false }, // <-- important
        background: {
          color: { value: "#0f172a" },
        },
        particles: {
          number: { value: 100 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: true },
          size: { value: { min: 2, max: 5 }, random: true },
          move: {
            enable: true,
            direction: "bottom",
            speed: 1,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
