import { connect } from "react-redux";
import Event from "./event";
import { getEventsAction } from "../../actions/event";

const mapStateToProps = state => {
  return {
    list: state.events.items
  };
};

const mapDispatchToPros = dispatch => ({
  initEvents: () => {
    dispatch(getEventsAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Event);
