import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import Book from '../components/Book/template';
import messageData from './mockData/data';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    book: messageData,
    loading: false,
  };

  const wrapper = shallow(<Book {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Book', () => {
  it('should render self', () => {
    const { wrapper } = setup();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
