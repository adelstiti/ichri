import React from 'react'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';

import './CollectionsOverview.scss'
const CollectionsOverview = ({collections}) => {
    return (
        <div className="collectionsOverview">
            {collections && collections.map(({id, ...otherCollections}) => (
                   <PreviewCollection key={id} {...otherCollections} />
            ))}
        </div>
    )
}

export default CollectionsOverview
