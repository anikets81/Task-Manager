import React from 'react'

const ItemCard = (prop) => {
  console.log(prop)
  const handleClick = async()=>{
    const response = await fetch("/api/tasks/"+prop.props._id, {
      method:'DELETE'
    })

    const json = await response.json()

    if(response.ok){
      console.log(response)
    }
  }
  return (
    <div  className='item-details'>
        <h4>{prop.props.title}</h4>
        <p><strong>Price(Rs)</strong> {prop.props.price}</p>
        <p>{prop.props.quantity}</p>
        <p>{prop.props.createdAt}</p>
        <span className='' onClick={handleClick}>Delete</span>
    </div>
  )
}

export default ItemCard