import "./DotRing.css";
import useMousePosition from "./cursor";
import { MouseContext } from "./mouse-context";
import { useContext } from "react";

const DotRing = () => {
const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
