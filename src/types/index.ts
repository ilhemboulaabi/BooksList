export interface IBookStateProps {
  books: IBook[],
  isBooksLoading: boolean,
  numFound: number
}

export interface IBookDetailsStateProps {
  isBookDetailsLoading: boolean,
  bookDetails: IBookDetails
}

export interface IStateProps {
  booksState: IBookStateProps,
  bookDetailsState: IBookDetailsStateProps
}

export interface IBook {
  key: string,
  cover_i: number,
  title: string,
  subtitle: string,
  author_name: string
}

export interface IBookDetails {
  key: string,
  covers: number[],
  title: string,
  subtitle: string,
  authors: string[],
  first_publish_date: number,
  description: {
    value: string,
    type: string
  }
}

export interface IBooksResponce {
  docs: IBook[],
  numFound: number
}