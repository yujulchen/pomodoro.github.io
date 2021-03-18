import { useState, useEffect } from "react";
import YouTube from "react-youtube";

// svg components
import ClockCircle from "./svg/ClockCircle";
import Stop from "./svg/Stop";
import Play from "./svg/Play";
import Pause from "./svg/Pause";
import Change from "./svg/Change";
import Mute from "./svg/Mute";

function Clock() {
  const [work, setWork] = useState(5);
  const [rest, setRest] = useState(8);
  const [workState, setWorkState] = useState(work);
  const [play, setPlay] = useState(false);
  const [autoplay, setAutoplay] = useState(0);

  // 影片播放設定
  const opts = {
    width: "560",
    height: "315",
    playerVars: {
      autoplay: autoplay,
    },
  };

  // 計時器
  useEffect(() => {
    const int = setInterval(() => {
      // console.log(`${Date.now()} - paused: ${play}`);
      if (play === true && workState !== 0) {
        setAutoplay(0);
        setWorkState(workState - 1);
      }
      if (workState === 0) {
        setPlay(false);
        setWorkState(work);
        setAutoplay(1);
      }
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, [play, workState]);

  // 開始計時/暫停計時
  function changePlay() {
    play === false ? setPlay(true) : setPlay(false);
  }

  // 恢復預設
  function stopPlay() {
    setPlay(false);
    setWorkState(work);
  }

  // 切換休息/工作計時
  function changeState() {
    if (workState === work) {
      setWorkState(rest);
    } else {
      setWorkState(work);
    }
  }

  // 把音樂停掉
  function changeVoice() {
    setAutoplay(0);
  }

  return (
    <>
      <div className="timeBox">{`${Math.floor(workState / 60)}:${(
        "00" +
        (workState % 60)
      ).slice(-2)}`}</div>
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
            changePlay();
          }}
        >
          <div style={{ display: play === false ? "block" : "none" }}>
            <Play />
          </div>
          <div style={{ display: play === false ? "none" : "block" }}>
            <Pause />
          </div>
        </div>
        <div
          className="change"
          onClick={() => {
            changeState();
          }}
        >
          <Change />
        </div>
      </div>
      <div className="musicBox">
        <div
          className="music"
          onClick={() => {
            changeVoice();
          }}
        >
          <div style={{ display: "none" }}>
            <YouTube videoId="xCxP5_wpGiQ" opts={opts}></YouTube>
          </div>
          <Mute />
        </div>
      </div>
      <div className="circle">
        <ClockCircle />
      </div>
    </>
  );
}

export default Clock;
