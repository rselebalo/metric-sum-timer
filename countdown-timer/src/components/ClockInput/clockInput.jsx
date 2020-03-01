import React, { useState, useRef } from 'react';
import { Button } from 'reactstrap';
import { isEmpty } from 'lodash';

const ClockInput = ({ ...props }) => {
  const inputRef = useRef(null);
  const [inputTime, setInputTime] = useState();

  const onSubmit = () => {
    props.onSetCountdown(inputTime);
    setInputTime('');
  };

  return (
    <>
      <div className="holder">
        <label>Countdown:</label>
        <input
          type="number"
          ref={inputRef}
          placeholder="(Min)"
          value={inputTime}
          onChange={input => {
            setInputTime(input.target.value);
          }}
        />
        <Button
          className="btn-start-timer"
          color="success"
          disabled={isEmpty(inputTime) || inputTime < 0 ? true : false}
          onClick={onSubmit}>
          START
        </Button>
      </div>
    </>
  );
};
export default ClockInput;
