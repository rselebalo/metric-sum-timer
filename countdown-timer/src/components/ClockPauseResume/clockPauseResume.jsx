import React from 'react';
import PauseIcon from '../../assets/icons/pause.png';
import PlayIcon from '../../assets/icons/play.png';

const PauseResumeClock = ({ ...props }) => {
  const { running, count, isPaused } = props;
  return (
    <div>
      <img
        style={{
          display: count > 0 && running && !isPaused ? 'inline' : 'none',
        }}
        alt="pause"
        src={PauseIcon}
        onClick={() => props.handlePause()}
      />
      <img
        style={{
          display: count > 0 && running && isPaused ? 'inline' : 'none',
        }}
        alt="continue"
        src={PlayIcon}
        onClick={() => props.handleContinue()}
      />
    </div>
  );
};
export default PauseResumeClock;
