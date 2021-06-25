import React from 'react';

import '../menu-item/menu-item.styles.scss'

const MenuItem = ({title, handleClickEvent}) => {
    return(
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <p className='subtitle'>SHOP NOW</p>
            </div>
        </div>
    )
}

export default MenuItem;