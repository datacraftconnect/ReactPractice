import { useEffect, useRef, useState } from "react";

const items = [
  { label: "Apple", quantity: 1 },
  { label: "Banana", quantity: 2 },
  { label: "Cherry", quantity: 3 },
  { label: "Date", quantity: 1 },
];

// Flatten the items based on quantity
const generateSegments = (items) =>
  items.flatMap((item) => Array(item.quantity).fill(item.label));

// Segment colors
const getColor = (i) => {
  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
  ];
  return colors[i % colors.length];
};

// Convert polar to cartesian for arc drawing
function polarToCartesian(cx, cy, r, angle) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

// Draw SVG arc path for segment
function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    x,
    y,
    "L",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    "Z",
  ].join(" ");
}

const Wheel = () => {
  const segments = generateSegments(items);
  const anglePerSegment = 360 / segments.length;

  const [arrowAngle, setArrowAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const velocity = useRef(0);
  const animationRef = useRef(null);

  const spin = () => {
    if (spinning) return;
    velocity.current = Math.random() * 30 + 40; // Initial speed
    setSpinning(true);
  };

  const animate = () => {
    if (!spinning) return;

    velocity.current *= 0.97; // Damping
    setArrowAngle((prev) => (prev + velocity.current) % 360);

    if (velocity.current < 0.5) {
      setSpinning(false);
      cancelAnimationFrame(animationRef.current);

      // Determine selected segment
      const selectedIndex =
        Math.floor((arrowAngle % 360) / anglePerSegment) % segments.length;
      const selectedLabel = segments[selectedIndex];

      alert(`🎯 You got: ${selectedLabel}`);
      return;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (spinning) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationRef.current);
  }, [spinning]);

  // Dynamic sizing
  const size = Math.min(window.innerWidth, window.innerHeight) * 0.9;
  const radius = size / 2 - 10;
  const center = size / 2;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f0f0f0",
        position: "relative",
      }}
    >
      {/* Static Wheel */}
      <svg width={size} height={size} style={{ position: "absolute" }}>
        {segments.map((label, index) => {
          const startAngle = index * anglePerSegment;
          const endAngle = startAngle + anglePerSegment;
          const path = describeArc(
            center,
            center,
            radius,
            startAngle,
            endAngle
          );
          return (
            <path
              key={index}
              d={path}
              fill={getColor(index)}
              stroke="#fff"
              strokeWidth={2}
            />
          );
        })}

        {/* Segment Labels */}
        {segments.map((label, index) => {
          const midAngle = (index + 0.5) * anglePerSegment;
          const rad = (midAngle * Math.PI) / 180;
          const x = center + (radius / 1.5) * Math.cos(rad);
          const y = center + (radius / 1.5) * Math.sin(rad);
          return (
            <text
              key={index}
              x={x}
              y={y}
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize={radius / 12}
              fill="#000"
            >
              {label}
            </text>
          );
        })}
      </svg>

      {/* Rotating Arrow */}
      <div
        onClick={spin}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${arrowAngle}deg)`,
          transformOrigin: "50% 50%",
          cursor: spinning ? "not-allowed" : "pointer",
          zIndex: 20,
          width: size * 0.15,
          height: size * 0.15,
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          style={{ pointerEvents: "none" }}
        >
          <polygon
            points="50,0 60,60 50,50 40,60"
            fill="#e11d48"
            stroke="#900"
            strokeWidth="2"
            style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))" }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Wheel;
