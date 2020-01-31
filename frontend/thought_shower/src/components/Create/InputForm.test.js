import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputForm from './InputForm'


Enzyme.configure({adapter: new Adapter() });

describe ('InputForm', () => {
  it('should show text', () => {
   const component = shallow(<InputForm />);
    expect(component.contains('Create a New Idea!')).toBe(true);
  })
})