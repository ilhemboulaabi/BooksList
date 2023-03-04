import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import * as BooksActions from '../../store/actions/books';
import { IStateProps } from "../../types";
import Main from "./template";

export const mapStateToProps = (state: IStateProps) => {
  return {
    books: state.booksState.books,
    isBooksLoading: state.booksState.isBooksLoading,
    numFound: state.booksState.numFound
  }
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      books: bindActionCreators(BooksActions, dispatch),
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
