import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header'
import { Link } from 'react-router';
import {MemoryRouter} from 'react-router-dom';
import IdeaList from '../TitleView/IdeaList'

Enzyme.configure({adapter: new Adapter() });

describe ('Header', () => {
  it('should show text', () => {
    // const wrapper = shallow(<Header />);
    const component = shallow(<Header />);
    expect(component.contains('Thought Shower')).toBe(true);
  })
})



// it('includes link to Create Idea', () => {                                       
//   const wrapper = shallow(<MemoryRouter><IdeaList /></MemoryRouter>);
//   expect(wrapper.find('Nav.Link')).toBe.equal('/ideas');
//  });

//  it('includes link to Mission scene', function() {
//   const wrapper = shallow(<MemoryRouter><Home /></MemoryRouter>);
//   expect(wrapper.find('Link').prop('to')).to.be.equal('/mission');
// });