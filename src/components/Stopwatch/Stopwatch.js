import Button from "../Button/Button";
import styles from "./Stopwatch.module.scss";
import FormattedTime from "../FormattedTime/FormattedTime";
import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [intervalTimer, setIntervalTimer] = useState(null);

  const start = () => {
    setIntervalTimer(
      setInterval(() => {
        setStopwatchTime((preValue) => preValue + 1);
      }, 1)
    );
  };

  const stop = () => {
    clearInterval(intervalTimer);
    setIntervalTimer(null);
  };

  const reset = () => {
    if (intervalTimer) {
      clearInterval(intervalTimer);
      setIntervalTimer(null);
    }
    setStopwatchTime(0);
  };

  useEffect(() => {
    return () => {
      if (intervalTimer) {
        clearInterval(intervalTimer);
        setIntervalTimer(null);
      }
    };
  }, []);

  return (
    <div className={styles.stopwatch}>
      <div className={styles.stopwatchTime}>
        <FormattedTime time={stopwatchTime} />
      </div>
      <div className={styles.buttons}>
        <Button onClick={start}>START</Button>
        <Button onClick={stop}>STOP</Button>
        <Button onClick={reset}>RESET</Button>
      </div>
    </div>
  );
};

export default Stopwatch;
