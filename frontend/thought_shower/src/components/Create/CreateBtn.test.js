import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateBtn from './CreateBtn'


Enzyme.configure({adapter: new Adapter() });

describe ('CreateBtn', () => {
  it('should show text', () => {
   const component = shallow(<CreateBtn />);
    expect(component.contains('Create')).toBe(true);
  })
})