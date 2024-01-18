import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Gallery() {
    const [items,setItems] = useState([]);

    useEffect(() => {

        const getItems = async () => {
            let res = await axios.get('http://localhost:8000/items')
            console.log(res.data);
            setItems(res.data);
        }

        getItems();

    },[])

    const showItems = items.map(i => <h4>{i.name}</h4>);

  return (
    <div>{showItems}</div>
  )
}

export default Gallery