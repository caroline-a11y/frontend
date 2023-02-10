import React from "react";
import Kit from "./Kit";
import {useState} from 'react';

function MyKitDetail({detailData,handleClick}) {
    const [formData, setFormData ] = useState({
        name:"",
        brand: "",
        creation: 0,
        shade: 0,
        phone: 0,
        image: ""

        })
        function handleSubmit(e) {
            e.preventDefault()
            //POST method
            fetch("http://localhost:8001/kits", {
                method: "POST",
                headers:
                    {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: e.target.name.value,
                        brand: e.target.brand.value,
                        creation: parseInt(e.target.creation.value),
                        shade: parseInt(e.target.shade.value),
                        phone: parseInt(e.target.phone.value),
                        image: e.target.image.value,
                    })
                }).then(r=>r.json())
                .then(((data)=> setFormData(data)))
                setFormData({name:"",
                brand: "",
                creation: 0,
                shade: 0,
                phone: 0,
                image: ""})
            }
            function handleChange(e){
                setFormData({...formData, [e.target.name]: e.target.value})
            }
    return(
        <div>
        <div className="my-kit-detail">
            {detailData.map((kit)=><Kit container="detail" kit={kit} key={kit.id} handleClick={handleClick} />)}
            
        </div>
       
            <form onSubmit={handleSubmit}>
            <label for="Name">Name:</label>
            <input type="text" id="Name" name="name" value={formData.name} onChange={handleChange}/>
            <label for="Brand">Brand:</label>
            <input type="text" id="Brand" name="brand" value={formData.brand} onChange={handleChange}/>
            <label for="Creation">Creation:</label>
            <input type="number" id="Creation" name="creation" value={formData.creation} onChange={handleChange}/>
            <label for="Shade">Shade:</label>
            <input type="number" id="Shade" name="shade" value={formData.shade} onChange={handleChange}/>
            <label for="Phone">Phone:</label>
            <input type="number" id="Phone" name="phone" value={formData.phone} onChange={handleChange}/>
            <label for="Image">Image:</label>
            <input type="text" id="Image" name="image" value={formData.image} onChange={handleChange}/>
            <input type="submit" value="Submit"></input>
            </form>
        </div>
        
    )
}
export default MyKitDetail