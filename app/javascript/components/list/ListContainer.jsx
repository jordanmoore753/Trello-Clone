import { connect } from "react-redux";
import List from "./List";
import * as actions from '../../actions/BoardActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  const list_id = ownProps.id;
  return {
    onTitleUpdate: (title) => {
      dispatch(actions.editListTitle(list_id, title));
    }
  }
}

const ListContainer = connect(
  null,
  mapDispatchToProps
)(List);

export default ListContainer;