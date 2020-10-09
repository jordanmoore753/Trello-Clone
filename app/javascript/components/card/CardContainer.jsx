import { connect } from "react-redux";
import Card from "./Card";
import * as actions from '../../actions/BoardActions';

const mapStateToProps = (state, ownProps) => {
	const card = state.cards.find(card => card.id === Number(ownProps.match.params.card_id));

	return {
		card
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {

	};
};

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;