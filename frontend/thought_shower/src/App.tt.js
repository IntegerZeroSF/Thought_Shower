import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Header from '../src/components/Header/Header'
import {Adapter, Shallow, mount } from 'enzyme-adapter-react-16'
import { BrowserRouter as Router } from 'react-router-dom';


test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><App /></Router>, div);
  console.log('true')
  ReactDOM.unmountComponentAtNode(div);
});


// describe('App component', () => {
//   let component;
//   beforeEach( () => {
//     component = mount(<App />)
//   }) 
//   it('renders Thought Shower', () => {
//     expect(component.contains(Header))
//   })
// })



// import { isMainThread } from 'worker_threads';