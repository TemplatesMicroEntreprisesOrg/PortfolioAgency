import * as React from "react";
const ReactSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.232 23 20.463"
      style={{ transition: "all 0.5s ease" }}
    >
      <title>{"React Logo"}</title>
      <circle r={2.05} fill={"#61dafb"} />
      <g fill="none" stroke={"#61dafb"}>
        <ellipse rx={11} ry={4.2} />
        <ellipse rx={11} ry={4.2} transform="rotate(60)" />
        <ellipse rx={11} ry={4.2} transform="rotate(120)" />
      </g>
    </svg>
  );
};
export default ReactSvg;
