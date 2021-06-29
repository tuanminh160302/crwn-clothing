import React from 'react';

import '../custom-button/custom-button.styles.scss';

export const CustomButton = ({ content, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {content}
        </button>
    )
}