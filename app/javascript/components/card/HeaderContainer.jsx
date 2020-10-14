import { connect } from 'react-redux';
import Header from './Header';

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.card.id;
  return {
    onSubmit: (title) => {
      /* finish this part */
      dispatch(actions.updateCardTitle(id, title))
    }
  }
  
}

const HeaderContainer = connect(
  null,
  mapDispatchToProps
)(Header);

export default HeaderContainer;