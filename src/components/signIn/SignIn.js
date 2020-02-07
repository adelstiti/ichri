import React,{useState} from 'react'

import './SignIn.scss'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await auth.signInWithEmailAndPassword(email,password);
          setEmail('');
          setPassword('');
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='signIn'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted" >Email</label>
                    <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required/>
                </div>
                <div className='buttons'>
                    <button className="btn btn-raised btn-primary" onClick={handleSubmit} type='submit'>Sign in </button>
                    <button className="btn btn-raised btn-info " onClick={signInWithGoogle} >Sign in with Google </button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
