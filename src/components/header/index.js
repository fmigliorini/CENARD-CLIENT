import Header from './header';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isAuth: state.auth.authenticate,
    rol: state.auth.rol,
    name: state.auth.name,
});

export default connect(mapStateToProps)(Header);