import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ClockInput from './clockInput';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ClockInput component', () => {
  test('renders', () => {
    const wrapper = shallow(<ClockInput time={2} initialTime={2} />);

    expect(wrapper.exists()).toBe(true);
  });

  test('user input text is echoed', () => {
    const wrapper = shallow(<ClockInput />);

    wrapper.find('input').simulate('change', {
      target: { value: 2 },
    });

    expect(wrapper.find('input').props().value).toEqual(2);
  });
});
