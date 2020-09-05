import React,{useState,useEffect} from 'react'
import './Directory.scss'
import MenuItem from '../menu-item/MenuItem'
import {firestore} from '../../firebase/firebase.utils'

const Directory = () => {

    const [sections, setSections] = useState([]);

    useEffect(() => {
        firestore.collection("sections").onSnapshot((snapshot) =>
        setSections(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);


    return (
    <div className='directory-menu'>
        {
            sections.map(({id, ...otherProps}) => (
                <MenuItem key={id} {...otherProps} />
                ))
        }
    </div>
    )
}

export default Directory
