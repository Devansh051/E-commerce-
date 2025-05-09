import React from 'react'
import Item from '../Items/Item'
import './NewCollection.css'
import new_collection from '../Assests/new_collections';

function NewCollection() {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        

        <div className="collections">
            {new_collection.map((item, id) => {
                return <Item key={id} id = {item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection
