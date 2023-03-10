import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as BookDetailsActions from '../../store/actions/bookDetails';
import { IStateProps } from '../../types';
import BookDetails from './template';

export interface IDispatchBookDetailsProps {
  bookDetails: () => void;
}

const mapStateToProps = (state: IStateProps) => ({
  bookDetails: state.bookDetailsState.bookDetails,
  isBookDetailsLoading: state.bookDetailsState.isBookDetailsLoading
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    bookDetails: bindActionCreators(BookDetailsActions, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
