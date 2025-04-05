"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Load optimized particles

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Initialize particles engine
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: {
          color: "#000",
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" }, // 💥 Grab effect on hover
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.9, // Stronger connection when hovered
              },
            },
            push: { quantity: 3 },
          },
        },
        particles: {
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: { default: "out" },
          },
          number: {
            value: 120,
            density: { enable: true, area: 800 },
          },
          links: {
            enable: true,           // 🔗 Always show light connections
            distance: 150,
            opacity: 0.3,           // Normal state opacity
            width: 1,
            color: "#00FF99",       // You can match your theme color
          },
        },
      }}
      
      
    />
  );
};

export default ParticlesBackground;
