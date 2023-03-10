import React from 'react';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Enzyme, { shallow } from 'enzyme';
import App from '../components/App/index';

Enzyme.configure({ adapter: new Adapter() });

describe("App main wrapper", () => {
  it("should render without error", () => {
    shallow(<App />);
  });
});
