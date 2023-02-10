import React from "react";
import Kit from "./Kit"

function KitBrand ({kitData, handleClick}) {
    return(
        <div className="kit-brand">
            {
            kitData.map((kit)=><Kit key={kit.id} kit={kit} handleClick={handleClick}/>)
            }
        </div>
    )
}
export default KitBrand