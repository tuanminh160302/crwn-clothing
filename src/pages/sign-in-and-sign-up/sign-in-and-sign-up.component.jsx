import React from 'react';

import '../sign-in-and-sign-up/sign-in-and-sign-up.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

export const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <div className='sign-in-and-sign-up'>
                <SignIn></SignIn>
                <SignUp></SignUp>
            </div>
        </div>
    )
}