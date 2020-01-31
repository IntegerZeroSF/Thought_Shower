import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TitleView from './TitleView'
import { Link } from 'react-router';
import {MemoryRouter} from 'react-router-dom';
import IdeaList from '../TitleView/IdeaList'

Enzyme.configure({adapter: new Adapter() });

describe ('IdeaList', () => {
  it('should show text', () => {
    // const wrapper = shallow(<Header />);
    const component = shallow(<TitleView
       title={'test1'}
       category={'category1'}
       />);
    expect(component.contains('test1')).toBe(true)
  })
})