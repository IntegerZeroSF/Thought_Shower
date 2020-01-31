import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UpdateBtn from './UpdateBtn'


Enzyme.configure({adapter: new Adapter() });

describe ('UpdateBtn', () => {
  it('should show text', () => {
   const component = shallow(<UpdateBtn />);
    expect(component.contains('Update Idea')).toBe(true);
  })
})