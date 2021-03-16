import { useState, useEffect } from "react";
import moment from "moment";

// svg components
import ClockCircle from "./svg/ClockCircle";
import Stop from "./svg/Stop";
import Play from "./svg/Play";
import Pause from "./svg/Pause";
import Change from "./svg/Change";
import Music from "./svg/Music";

function Clock() {
  const [work, setWork] = useState(1500000);
  const [rest, setRest] = useState(300000);
  const [workState, setWorkState] = useState(work);
  const [play, setPlay] = useState(false);

  function ChangePlay() {
    play === true ? setPlay(false) : setPlay(true);
  }

  function stopPlay() {
    setWorkState(work);
  }

  function ChangeState() {
    console.log("change");
    if (workState === work) {
      setWorkState(rest);
    } else {
      setWorkState(work);
    }
  }

  // TODO: 計時器製作中
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  console.log("nowTime", nowTime);

  return (
    <>
      <div className="timeBox">{workState}</div>
      <div className="iconBox">
        <div
          className="stop"
          onClick={() => {
            stopPlay();
          }}
        >
          <Stop />
        </div>
        <div
          className="play"
          onClick={() => {
            ChangePlay();
          }}
        >
          <div style={{ display: play === true ? "none" : "block" }}>
            <Play />
          </div>
          <div style={{ display: play === true ? "block" : "none" }}>
            <Pause />
          </div>
        </div>
        <div
          className="change"
          onClick={() => {
            ChangeState();
          }}
        >
          <Change />
        </div>
      </div>
      <div className="musicBox">
        <div className="music">
          <Music />
        </div>
      </div>
      <div className="circle">
        <ClockCircle />
      </div>
    </>
  );
}

export default Clock;
