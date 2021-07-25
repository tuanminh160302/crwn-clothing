import React from 'react';

import '../custom-button/custom-button.styles.scss';

export const CustomButton = ({ content, isGoogleSignIn, inverted, ...otherProps }) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {content}
        </button>
    )
}