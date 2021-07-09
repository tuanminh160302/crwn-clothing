import React from 'react';
import '../sign-up/sign-up.styles.scss'
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword) {
            alert("passwords don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})

            this.setState((prevState, prevProps) => ({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }))

        } catch (error) {
            console.error(error)
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState((prevState, prevProps) => ({
            [name]: value
        }))
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                    >
                    </FormInput>

                    {CustomButton({type: 'submit', content: 'Sign Up'})}
                </form>
            </div>
        )
    }
}

export default SignUp