import keyMirror from 'keymirror';

const BOOKS_ACTIONS = keyMirror({
  INIT_BOOKS: null,
  INIT_BOOKS_SUCCESS: null,
  INIT_BOOKS_FAILED: null
});

export default {
  ...BOOKS_ACTIONS
};
