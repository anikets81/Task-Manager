import React from 'react'
import { useState } from 'react'
const ItemForm = ({props}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const item = {title, price, quantity}

        const response = await fetch("/api/tasks/", {
            method: 'POST',
            body : JSON.stringify(item),
            headers: {
                "Content-Type" : "application/json"
            }
        })

        const json = await response.json()

        if(!response.ok){
           setError(json.error.message)
        }
            
        if(response.ok)
        {
            setError(null)
            setTitle("")
            setPrice("")
            setQuantity("")
            console.log("new item added", json)
            
        }
        props.push(json)
        console.log(props)
    }   
  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a new Item</h3>

        <label >Item Title: </label>
        <input 
        type="text"
        onChange={(e)=>setTitle(e.target.value)} 
        value={title}/>

        <label >Item Price (Rs): </label>
        <input 
        type="number"
        onChange={(e)=>setPrice(e.target.value)} 
        value={price}/>

        <label >Item Quantity (Kg): </label>
        <input 
        type="number"
        onChange={(e)=>setQuantity(e.target.value)} 
        value={quantity}/>

        <button>Add Item</button>
        {error && <div className='error'>{error}</div>}
        
    </form>
  )
}

export default ItemForm