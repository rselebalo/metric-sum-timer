import React from 'react';
import BeepIcon from '../../assets/icons/beep.png';

const Clock = ({ ...props }) => {
  const { time, initialTime } = props;

  const format = () => {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    const initialMinutes = Math.floor(initialTime / 60);

    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;

    // check remaining time
    if (minutes === '00' && seconds === '00') {
      return (
        <div className="time-up">
          <h2>Time's Up!</h2>
          <img alt="beep" src={BeepIcon} />
        </div>
      );
    }
    if (
      (initialMinutes > 1 && minutes < Math.floor(initialMinutes / 2)) ||
      (initialMinutes === 1 && seconds < 30 && seconds > 0)
    ) {
      return (
        <div>
          <h5>More than halfway there!</h5>
          <h1>
            <font
              color={minutes === '00' && seconds <= 20 ? 'red' : 'black'}
              className={minutes === '00' && seconds <= 10 ? 'blinking' : ''}>
              {minutes}:{seconds}
            </font>
          </h1>
        </div>
      );
    }
    return (
      <h1>
        {minutes}:{seconds}
      </h1>
    );
  };

  return (
    <div>
      <div>{format()}</div>
    </div>
  );
};

export default Clock;
