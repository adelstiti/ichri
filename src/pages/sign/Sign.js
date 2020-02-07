import React from 'react'
import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/signUp/SignUp'

import './Sign.scss'
const Sign = () => {
    return (
        <div className="sign">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Sign
