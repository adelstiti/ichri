import React,{useState,useEffect} from 'react'
import './Directory.scss'
import MenuItem from '../menu-item/MenuItem'

const Directory = () => {

    const [sections, setSections] = useState([]);

      useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const res=await fetch('/sections')
        const data = await res.json();
        setSections(data)
    }

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
