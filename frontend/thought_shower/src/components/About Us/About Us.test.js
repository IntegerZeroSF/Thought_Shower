import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AboutUs from './About Us'


Enzyme.configure({adapter: new Adapter() });

describe ('AboutUs', () => {
  it('should show text', () => {
   const component = shallow(<AboutUs />);
    expect(component.contains('About Us!')).toBe(true)
  })
})