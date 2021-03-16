import { usestate, useeffect } from "react";

// svg components
import ClockCircle from "./svg/ClockCircle";
import Stop from "./svg/Stop";
import Play from "./svg/Play";
import Change from "./svg/Change";
import Music from "./svg/Music";

function Clock() {
  return (
    <>
      <div className="timeBox">25:00</div>
      <div className="iconBox">
        <div className="stop">
          <Stop />
        </div>
        <div className="play">
          <Play />
        </div>
        <div className="change">
          <Change />
        </div>
      </div>
      <div className="music">
        <Music />
      </div>
      <div className="circle">
        <ClockCircle />
      </div>
    </>
  );
}

export default Clock;
