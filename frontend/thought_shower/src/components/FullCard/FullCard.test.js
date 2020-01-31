import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FullCard from './FullCard'


Enzyme.configure({adapter: new Adapter() });

describe ('FullCard', () => {
  it('should show text', () => {
   const component = shallow(<FullCard id={100}/>);
    expect(component.contains('Write a comment')).toBe(true)
  })
})