import React from 'react';

import '../homepage/homepage.styles.scss'
import Directory from '../../components/directory/directory.component'


const HomePage = (props) => {
    return(
        <div className='homepage'>
            <Directory className='directory-menu'></Directory>
        </div>
    )
} 

export default HomePage