import { useState, useEffect } from "react";
import YouTube from "react-youtube";

// css
import "../style/pomodoro.scss";

// svg components
import ClockCircle from "./svg/ClockCircle";
import Stop from "./svg/Stop";
import Play from "./svg/Play";
import Pause from "./svg/Pause";
import Change from "./svg/Change";
import Mute from "./svg/Mute";

function Clock() {
  // 工作計時(25分鐘)
  const [work, setWork] = useState(25 * 60);
  // 休息計時(5分鐘)
  const [rest, setRest] = useState(5 * 60);
  // 時間顯示
  const [workState, setWorkState] = useState(work);
  // 開始/暫停
  const [play, setPlay] = useState(false);
  // 音樂播放(預設為停止)
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
    // setInterval 每秒執行一次
    const int = setInterval(() => {
      // 如果點下開始計時鈕且計時器數字不等於0
      if (play === true && workState !== 0) {
        // 先不撥放音樂
        setAutoplay(0);
        // 計時器的數字每秒-1
        setWorkState(workState - 1);
      }
      // 如果計時器數字等於0
      if (workState === 0) {
        // 切換為預設值
        setPlay(false);
        // 將計時器的數字設成工作計時
        setWorkState(work);
        // 時間到撥放音樂
        setAutoplay(1);
      }
    }, 1000);
    return () => {
      // 清除setInterval
      clearInterval(int);
    };
  }, [play, workState]);

  // 開始計時/暫停計時icon切換
  function changePlay() {
    play === false ? setPlay(true) : setPlay(false);
  }

  // 恢復預設計時
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
      {/* 將秒數轉為 分：秒 */}
      <div className="timeBox">
        {`${Math.floor(workState / 60)}:${("00" + (workState % 60)).slice(-2)}`}
      </div>
      <div className="iconBox">
        {/* 恢復為預設計時 */}
        <div
          className="stop"
          onClick={() => {
            stopPlay();
          }}
        >
          <Stop />
        </div>
        {/* 開始/暫停計時 */}
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
        {/* 切換工作計時/休息計時 */}
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
        {/* 將音樂停止 */}
        <div
          className="music"
          onClick={() => {
            changeVoice();
          }}
        >
          {/* 內嵌yt撥放器 */}
          <div style={{ display: "none" }}>
            <YouTube videoId="v5Z59hF_C4A" opts={opts}></YouTube>
          </div>
          <Mute />
        </div>
      </div>
      <div className="circle circle-m">
        <ClockCircle />
      </div>
    </>
  );
}

export default Clock;
