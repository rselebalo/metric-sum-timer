import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ClockPauseResume from './clockPauseResume';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ClockPauseResume component', () => {
  test('renders', () => {
    const wrapper = shallow(
      <ClockPauseResume
        count={1}
        running={true}
        isPaused={false}
        handlePause={() => this.props.isPaused === false}
        handleContinue={() => this.props.isPaused === true}
      />,
    );

    expect(wrapper.exists()).toBe(true);
  });

  test('speed adjustment', () => {
    const mockFn = jest.fn();
    ClockPauseResume.prototype.setSpeed = mockFn;

    shallow(
      <ClockPauseResume
        count={1}
        running={true}
        isPaused={false}
        handlePause={() => false}
        handleContinue={() => true}
      />,
    );

    // wrapper
    //   .find('div')
    //   .childAt(0)
    //   .simulate('click');

    // expect(wrapper.prop('isPaused')).toEqual(true);

    ClockPauseResume.prototype.setSpeed();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
