import React from 'react'
import './PreviewCollection.scss'
import CollectionItem from '../collectionItem/CollectionItem'
const PreviewCollection = ({title,items}) => {

    return (
        <div className="collectionPreview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                { items.filter((item,i) => i < 4).map((item )=> (
                    <CollectionItem key={item.id} item={item} />
                ))}
                
            </div>
        </div>
    )
}

export default PreviewCollection
