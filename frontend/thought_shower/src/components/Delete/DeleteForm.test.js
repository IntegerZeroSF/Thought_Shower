import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DeleteForm from './DeleteForm'


Enzyme.configure({adapter: new Adapter() });

describe ('DeleteForm', () => {
  it('should show text', () => {
   const component = shallow(<DeleteForm />);
    expect(component.contains('Are you sure you want to delete?')).toBe(true);
  })
})