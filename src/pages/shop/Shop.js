import React,{useEffect,useState} from 'react'
import {Route} from 'react-router-dom'
import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview'
import Category from '../category/Category'

const Shop = ({match}) => {

    const [collections, setCollections] = useState([]);

    useEffect(() => {
        getData()
    }, []);
    const getData = async () => {
        const res=await fetch('/shopData')
        const data = await res.json();
         setCollections(data)
    }

    return (
        <div>
            <Route  exact path={`${match.path}`} component={() => <CollectionsOverview collections={collections} />} /> 
            <Route  path={`${match.path}/:categoryId`} component={Category} />
        </div>
    )
}

export default Shop
