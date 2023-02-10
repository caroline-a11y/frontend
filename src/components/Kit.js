import React from 'react'

function Kit({kit, handleClick, container}) {
  return (
    <div className='kits'>
            <img src={kit.image} alt={kit.name} onClick={()=>handleClick((kit.id))}/>
            <h3>{kit.name}</h3>

            <p>{kit.barcode}</p>
            <div className='likes'>
                <div>💜<span>{kit.brand}</span></div>
                <div>💯<span>{kit.shade}</span></div>
                <div>✅<span>{kit.creation}</span></div>
            </div>
            {container? <button className="add to cart" onClick={(e)=>{
              e.stopPropagation()
              handleClick(kit.id, true)
            }}>add to cart</button>:null}
            {container? <button className="delete" onClick={(e)=>{
              e.stopPropagation()
              handleClick(kit.id, true)
            }}>x</button>:null}
         
        </div>
   
  )
}

export default Kit