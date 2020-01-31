import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DeleteBtn from './DeleteBtn'


Enzyme.configure({adapter: new Adapter() });

describe ('DeleteBtn', () => {
  it('should show text', () => {
   const component = shallow(<DeleteBtn />);
    expect(component.contains('Delete Idea')).toBe(true)
  })
})