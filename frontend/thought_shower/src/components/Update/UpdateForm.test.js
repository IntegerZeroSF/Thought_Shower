import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UpdateForm from './UpdateForm'


Enzyme.configure({adapter: new Adapter() });

describe ('UpdateForm', () => {
  it('should show text', () => {
   const component = shallow(<UpdateForm />);
    expect(component.contains('Update an Idea!')).toBe(true);
  })
})