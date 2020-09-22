import React,{useState,useEffect} from 'react'
import CollectionItem from '../../components/collectionItem/CollectionItem';

import './Category.scss'

const Category = ({match}) => {

    const [items, setItems] = useState();

    useEffect(() => {
        const getData = async () => {
            const res=await fetch(`${process.env.REACT_APP_API_URL}/shopData?routeName=${match.params.categoryId}` )
            const data = await res.json();
            setItems(data[0].items)
        }
      
      getData()
  }, [match.params.categoryId]);

  
     return ( 
    <div className="container">
        <h1 className="title" style={{marginBottom : '5%'}}>{match.params.categoryId.toUpperCase() }</h1>
        <div className="row">
            { items && items.map((item )=> (
                    <span style={{display: 'contents'}}>.
                        <CollectionItem key={item.id} item={item} style={{backgourndColor:  'blue'}} />
                    </span>
                ))}
        </div>
        
    </div>

    

    
     )
       
                
   
}
export default Category
