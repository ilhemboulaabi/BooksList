import messageData from './mockData/data';
import { fetchBooks } from '../api/books';

global.fetch = require('jest-fetch-mock');

describe('testing books api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('calls api', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: [messageData] }));

    fetchBooks().then((res) => {
      expect(res.data[0].title).toEqual('The Power of Darkness');
    });

    expect(fetch.mock.calls.length).toEqual(1);
  });
});
