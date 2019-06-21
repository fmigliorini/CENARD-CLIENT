import Header from "./header";
import { connect } from "react-redux";
import { logOutAction } from "../../actions/login";

const mapStateToProps = state => ({
  isAuth: state.auth.authenticate,
  rol: state.auth.rol,
  name: state.auth.name
});

const mapDispatchToPros = dispatch => ({
  logOut: () => {
    dispatch(logOutAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Header);
