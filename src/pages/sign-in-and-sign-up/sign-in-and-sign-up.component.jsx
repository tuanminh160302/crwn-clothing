import React from 'react';

import '../sign-in-and-sign-up/sign-in-and-sign-up.styles.scss'
import SignIn from '../homepage/sign-in/sign-in.component';

export const SignInAndSignUpPage = () => {
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn></SignIn>
        </div>
    )
}