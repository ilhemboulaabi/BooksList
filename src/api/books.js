const API_URL = process.env.REACT_APP_API_URL;

// eslint-disable-next-line max-len
export const fetchBooks = (bookTitle, currentPage) => fetch(`${API_URL}/search.json?title=${bookTitle}&fields=key,cover_i,title,subtitle,author_name&page=${currentPage}`)
  .then((res) => res.json());

export const fetchBookDetails = (workId) => fetch(`${API_URL}${workId}.json`).then((res) => res.json());
