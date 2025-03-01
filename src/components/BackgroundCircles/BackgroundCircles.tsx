import React, { useMemo, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./BackgroundCircles.css";

type AnimatedBackgroundProps = {
  numCircles?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  blurAmount?: number;
  initialPositions?: { top: number; left: number }[];
  moveDistances?: { x: number; y: number }[];
  sides?: ("left" | "right" | "top" | "bottom")[];
  sectionRef: React.RefObject<HTMLElement>;
  scrollSpeedFactor?: number;
};

const BackgroundCircles: React.FC<AnimatedBackgroundProps> = ({
  numCircles = 3,
  colors = ["rgba(255, 0, 150, 0.7)", "rgba(0, 150, 255, 0.7)"],
  minSize = 200,
  maxSize = 500,
  blurAmount = 50,
  initialPositions = [],
  moveDistances = [],
  sides = [],
  scrollSpeedFactor = 300,
}) => {
  const { scrollY } = useScroll();
  const [scrollOffset, setScrollOffset] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollOffset(latest);
  });

  const circles = useMemo(() => {
    const allSides: ("left" | "right" | "top" | "bottom")[] = [
      "left",
      "right",
      "top",
      "bottom",
    ];

    return Array.from({ length: numCircles }).map((_, index) => {
      const assignedSide = sides[index] || allSides[index % allSides.length];
      const assignedTop = initialPositions[index]?.top ?? Math.random() * 80;
      const assignedLeft = initialPositions[index]?.left ?? Math.random() * 80;
      const moveX =
        assignedSide === "left"
          ? -(moveDistances[index]?.x ?? 50)
          : assignedSide === "right"
          ? moveDistances[index]?.x ?? 50
          : 0;
      const moveY =
        assignedSide === "top"
          ? -(moveDistances[index]?.y ?? 50)
          : assignedSide === "bottom"
          ? moveDistances[index]?.y ?? 50
          : 0;

      const colorIndex = index % colors.length;
      return {
        size: Math.random() * (maxSize - minSize) + minSize,
        top: assignedTop,
        left: assignedLeft,
        background: colors[colorIndex],
        side: assignedSide,
        moveX,
        moveY,
      };
    });
  }, [
    numCircles,
    colors,
    minSize,
    maxSize,
    initialPositions,
    moveDistances,
    sides,
  ]);

  return (
    <div className="backgroundAnimationCirclesContainer">
      {circles.map((circle, index) => {
        const moveX = (scrollOffset / scrollSpeedFactor) * circle.moveX;
        const moveY = (scrollOffset / scrollSpeedFactor) * circle.moveY;

        return (
          <motion.div
            key={index}
            className="backgroundAnimationCircles"
            style={{
              width: circle.size,
              height: circle.size,
              top: `${circle.top}%`,
              left: `${circle.left}%`,
              background: circle.background,
              filter: `blur(${blurAmount}px)`,
              x: moveX,
              y: moveY,
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundCircles;
