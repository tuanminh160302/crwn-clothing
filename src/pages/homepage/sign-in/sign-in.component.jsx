import { render } from '@testing-library/react';
import React from 'react';
import { withRouter } from 'react-router';

import '../sign-in/sign-in.styles.scss'

import { FormInput } from '../../../components/form-input/form-input.component';
import { CustomButton } from '../../../components/custom-button/custom-button.component'
import { signInWithGoogle } from '../../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidUpdate() {
        return this.props.currentUser ? 
        this.props.history.push('/')
        : null
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState((prevState, prevProps) => ({
            email: '',
            password: ''
        }))
    }

    handleChange = (e) => {
        const { value, name } = e.target

        this.setState((prevState, prevProps) => ({
            [name]: value,
        }))
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required />

                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required />

                    <div className='buttons'>
                        {/* <CustomButton type="submit" value='Submit Form' isGoogleSignIn={false}>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign in with Google</CustomButton> */}

                        {CustomButton({type: 'submit', value: 'Submit Form', isGoogleSignIn: false, content:'Sign in'})}
                        {CustomButton({onClick: signInWithGoogle, isGoogleSignIn: true, content: 'Sign in with Google'})}
                    </div>
                </form>
            </div>
        )
    }
}


export default withRouter(SignIn);