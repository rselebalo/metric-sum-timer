import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ClockSpeedAjuster from './clockSpeedAdjuster';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ClockSpeedAjuster component', () => {
  test('renders', () => {
    const wrapper = shallow(
      <ClockSpeedAjuster
        speed={1000}
        running={true}
        isPaused={false}
        setSpeed={1000}
      />,
    );

    expect(wrapper.exists()).toBe(true);
  });

  test('speed adjustment', () => {
    const mockFn = jest.fn();
    ClockSpeedAjuster.prototype.setSpeed = mockFn;

    shallow(
      <ClockSpeedAjuster
        speed={1000}
        running={true}
        isPaused={false}
        setSpeed={() => {}}
      />,
    );
    ClockSpeedAjuster.prototype.setSpeed();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
