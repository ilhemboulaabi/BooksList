import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from '../components/App/index';

Enzyme.configure({ adapter: new Adapter() });

describe("App main wrapper", () => {
  it("should render without error", () => {
    shallow(<App />);
  });
});
