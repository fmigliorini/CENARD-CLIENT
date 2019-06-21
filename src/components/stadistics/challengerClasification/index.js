import { connect } from "react-redux";

import ChallengerClasification from "./challengerClasification";

const mapStateToProps = state => ({
  isAuth: state.auth.authenticate,
  rol: state.auth.rol,
  userId: state.auth.id
});

export default connect(mapStateToProps)(ChallengerClasification);
