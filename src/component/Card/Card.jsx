import React, { useEffect, useState } from 'react';
import SinglesCard from '../SinglesCard/SinglesCard';

const Card = ({BookmarkItem}) => {
    const [Cards,setCards]=useState([]);

    useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setCards(data));
    },[])

    return (
        <div>
           {
           Cards.map(item=><SinglesCard item={item} key={item.id} BookmarkItem={BookmarkItem}/>)
           }
        </div>
    );
};

export default Card;