import Stadistics from "./stadistics";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isAuth: state.auth.authenticate,
  rol: state.auth.rol
});

export default connect(mapStateToProps)(Stadistics);
