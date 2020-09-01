import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustonButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I Already Have An Account</h2>
                <span>Sign In With Your Email And Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email' 
                        onChange={this.handleChange} 
                        value={this.state.email} 
                        label='Email'
                        required/>

                    <FormInput
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        label='Password'
                        required/>

                    <CustonButton type='Submit'>Sign In</CustonButton>
                    <CustonButton onClick={signInWithGoogle}>Sign In with Google</CustonButton>
                </form>
            </div>
        )
    }
}

export default SignIn;