import React from 'react';

import '../directory/directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'

import SECTIONS_DATA from '../../data/sections.data';

class Directory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                {this.state.collections.map(({ id, ...otherCollectionProps}) => (
                    <MenuItem key={id} {...otherCollectionProps}></MenuItem>
                ))}
            </div>
        )
    }
}

export default Directory;