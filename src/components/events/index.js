import { connect } from "react-redux";
import Event from "./event";
import { getEvents } from "../../actions/event";

const mapStateToProps = state => {
  return {
    list: state.events.items
  };
};

const mapDispatchToPros = dispatch => ({
  initEvents: () => {
    dispatch(getEvents());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Event);
