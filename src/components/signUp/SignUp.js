import React, { useState } from 'react'
import { createUserProfileDocument, auth } from '../../firebase/firebase.utils'

import './SignUp.scss'
const SignUp = () => {
    
    const [user, setUser] = useState({
        displayName : '',
        email : '',
        password : '',
        confirmPassword :''
    })
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = user;
        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }
        try {
          const {user} =  await auth.createUserWithEmailAndPassword(email,password);
          await createUserProfileDocument(user,{displayName});
          setUser({
            displayName : '',
            email : '',
            password : '',
            confirmPassword :''
        });
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="signUp">
            <h2 className="title">I do not have a acount</h2>
            <span>Sign up with your email and password</span>
            <form>
            {error &&  <div className="alert alert-danger mb-1 mt-2" role="alert">{error}</div>}
                <div className="form-group">
                    <label className="text-muted" >Display Name</label>
                    <input type="text" className="form-control" value={user.displayName} onChange={e => setUser({...user,displayName: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label className="text-muted" >Email</label>
                    <input type="email" className="form-control" value={user.email} onChange={e => setUser({...user,email: e.target.value})}  required/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input type="password" className="form-control" value={user.password} onChange={e => setUser({...user,password: e.target.value})}  required/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Confirm Password</label>
                    <input type="password" className="form-control" value={user.confirmPassword} onChange={e => setUser({...user,confirmPassword: e.target.value})}  required/>
                </div>
                <div className='buttons'>
                    <button className="btn btn-raised btn-primary" onClick={handleSubmit} type='submit'>Sign up </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
