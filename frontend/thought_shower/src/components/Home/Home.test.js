import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home'


Enzyme.configure({adapter: new Adapter() });

describe ('Home', () => {
  it('should show text', () => {
   const component = shallow(<Home />);
    expect(component.contains('Create')).toBe(true)
  })
})