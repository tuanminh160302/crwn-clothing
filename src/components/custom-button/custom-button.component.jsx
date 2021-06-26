import React from 'react';

import '../custom-button/custom-button.styles.scss';

export const CustomButton = ({ children, ...otherProps }) => {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )
}