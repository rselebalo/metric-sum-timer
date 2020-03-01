import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Clock from '../components/Clock/clock';
import ClockInput from '../components/ClockInput/clockInput';
import ClockSpeedAjuster from '../components/ClockSpeedAdjuster/clockSpeedAdjuster';
import ClockPauseResume from '../components/ClockPauseResume/clockPauseResume';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ClockSpeedAjuster component', () => {
  test('renders all clock components', () => {
    const clockWrapper = mount(<Clock />);
    const clockInputWrapper = mount(<ClockInput />);
    const clockSpeedWrapper = mount(<ClockSpeedAjuster />);
    const clockPauseWrapper = mount(<ClockPauseResume />);

    clockWrapper.setProps({ time: 2, initialTime: 2 });
    //clockInputWrapper.setProps({});
    clockSpeedWrapper.setProps({
      count: 1,
      running: true,
      isPaused: false,
      handlePause: () => false,
      handleContinue: () => true,
    });
    clockPauseWrapper.setProps({
      speed: 1000,
      running: true,
      isPaused: false,
      setSpeed: () => {},
    });

    expect(clockWrapper.find('h1').text()).toEqual('00:02');
    expect(clockPauseWrapper.exists()).toBe(true);
    expect(clockSpeedWrapper.exists()).toBe(true);
    expect(clockInputWrapper.exists()).toBe(true);
  });
});
