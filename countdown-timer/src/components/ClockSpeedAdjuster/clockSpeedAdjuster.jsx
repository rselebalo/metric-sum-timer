import React from 'react';
import { Button } from 'reactstrap';

const AdjustClockSpeed = ({ ...props }) => {
  const { running, speed, isPaused } = props;
  return (
    <div className="holder">
      <Button
        className={
          speed === 1000
            ? 'selected-button btn-mutate-timer'
            : 'btn-mutate-timer'
        }
        onClick={() => props.setSpeed(1000)}
        disabled={!running || isPaused < 0 ? true : false}>
        1X
      </Button>
      <Button
        className={
          speed === 1000 * 0.75
            ? 'selected-button btn-mutate-timer'
            : 'btn-mutate-timer'
        }
        onClick={() => props.setSpeed(1000 * 0.75)}
        disabled={!running || isPaused < 0 ? true : false}>
        1.5X
      </Button>
      <Button
        className={
          speed === 1000 * 0.5
            ? 'selected-button btn-mutate-timer'
            : 'btn-mutate-timer'
        }
        onClick={() => props.setSpeed(1000 * 0.5)}
        disabled={!running || isPaused < 0 ? true : false}>
        2X
      </Button>
    </div>
  );
};
export default AdjustClockSpeed;
