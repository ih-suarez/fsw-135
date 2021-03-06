import React, { useState, useContext } from 'react';
import AuthForm from './authForm/AuthForm';
import { UserContext } from '../../../../context/UserProvider';
import './auth.css';

const initInputs = { username: '', password: '' };

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs);
    const [toggle, setToggle] = useState(false);

    const { signup, login } = useContext(UserContext);

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    return (
        <div className='auth-container'>
            <h1>Rock The Vote</h1>
            { !toggle ?
                <div className='auth-form'>
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleSignup}
                    inputs={inputs}
                    btnText='Sign up'
                />
                <p onClick={() => setToggle(prev => !prev)}>Already a member?</p>
                </div>
            :
                <div className='auth-form'>
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText='Login'
                />
                <p onClick={() => setToggle(prev => !prev)}>Not a member?</p>
                </div>
            }
        </div>
    )
}