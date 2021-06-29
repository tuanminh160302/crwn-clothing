import React from 'react';

import '../sign-in-and-sign-up/sign-in-and-sign-up.styles.scss'
import SignIn from '../homepage/sign-in/sign-in.component';

export const SignInAndSignUpPage = ({currentUser}) => {
    return (
        <div className='sign-in-and-sign-up'>
            <div className='sign-in-and-sign-up'>
                {SignIn({currentUser: currentUser})}
            </div>
        </div>
    )
}