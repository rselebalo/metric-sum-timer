import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Clock from './clock';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Clock component', () => {
  test('renders', () => {
    const wrapper = shallow(<Clock time={2} initialTime={2} />);

    expect(wrapper.exists()).toBe(true);
  });
});
