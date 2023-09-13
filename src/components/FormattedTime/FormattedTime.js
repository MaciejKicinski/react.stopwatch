import styles from "./FormattedTime.module.scss";

const FormattedTime = ({ time }) => {
  const formatTime = (milliseconds) => {
    const millis = Math.floor(milliseconds % 1000);
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

    const time =
      [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
      ].join(":") +
      "." +
      millis;

    return time;
  };

  return <div className={styles.component}>{formatTime(time)}</div>;
};

export default FormattedTime;
