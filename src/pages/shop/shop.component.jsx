import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from '../../data/shop.data';

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sections: SHOP_DATA
        }
    }

    render() {
        return (
            <div className='shop-page'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <CollectionPreview
                        key={id}
                        {...otherSectionProps}
                        >
                             
                    </CollectionPreview>
                ))}
            </div>
        )
    }
}

export default ShopPage;