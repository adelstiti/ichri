import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import './Header.scss'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import { selectCartHidden,selectCurrentUser } from '../../redux/user/userSelectors';

const Header = ({currentUser,hidden }) => {

    return (
        <div className='header'>
            <Link to="/" className="logoContainer" >
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/contact'>CONTACT</Link>
                {currentUser ? 
                    <div className="option" onClick={() => auth.signOut()} >Sign Out</div>
                :
                <Link className="option" to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {!hidden ? <CartDropdown /> : ''}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
});

export default connect(mapStateToProps)(Header)
