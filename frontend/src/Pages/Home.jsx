import React from 'react'
import ItemCard from "../Components/ItemCard"
import ItemForm from '../Components/ItemForm'
import { useState, useEffect } from 'react'


const Home = () => {

    const [items, setItems] = useState(null)

    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await fetch("/api/tasks")
            const json = await response.json()

            if(response.ok)
                setItems(json)
        }       
        fetchItems()
    }, [items])

  return (
    <div className='home'>
        <div className='items'>
            {items && items.map((item)=>
                (<ItemCard key={item._id} props={item}/>)
            )}
        </div>
        <ItemForm props={items}/>
    </div>
  )
}

export default Home