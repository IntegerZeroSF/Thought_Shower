import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


import { shallow, mount } from 'enzyme'
describe('App component', () => {
  let component;
  beforeEach( () => {
    component = mount(<App />)
  }) 
  it('renders Home', () => {
    expect(component.contains(Home))
  })
})