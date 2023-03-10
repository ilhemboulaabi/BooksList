import keyMirror from 'keymirror';

const BOOK_DETAILS_ACTIONS = keyMirror({
  INIT_BOOK_DETAILS: null,
  INIT_BOOK_DETAILS_SUCCESS: null,
  INIT_BOOK_DETAILS_FAILED: null
});

export default {
  ...BOOK_DETAILS_ACTIONS
};
