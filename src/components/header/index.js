import Header from './header';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isAuth: state.auth.authenticate,
    rol: state.auth.authenticate
});

export default connect(mapStateToProps)(Header);