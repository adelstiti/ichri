import React,{useEffect,useState} from 'react'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';

const Shop = () => {

    const [collections, setCollections] = useState([]);

    useEffect(() => {
        getData()
    }, []);
    const getData = async () => {
        const res=await fetch('/shopData')
        const data = await res.json();
         setCollections(data)
         console.log(data)
    }


    return (
        <div>
            {collections && collections.map(({id, ...otherCollections}) => (
                   <PreviewCollection key={id} {...otherCollections} />
            ))}
        </div>
    )
}

export default Shop
