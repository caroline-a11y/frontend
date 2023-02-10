import React from 'react';
import './App.css';
import KitBrand from './components/Kitbrand'
import { useEffect, useState } from 'react'
import MyKitDetail from './components/MykitDetail'
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  const[kitData, setKitData] =useState([])
  const[detailData, setDetailData] =useState([])
  useEffect(()=>{
    fetch("http://localhost:8001/kits")
    .then((response)=> response.json())
    .then((data)=> setKitData(data))
  }, [])
  
  function onKitClick(id, discharge){
    const item = kitData.find((kit)=> kit.id === id)
    const clickOnKit = detailData.find((item)=> item.id ===id)
    setDetailData([...detailData, item])

    if(discharge){
      setKitData(kitData.filter(kit=>kit.id !==id))
      setDetailData(detailData.filter(kit=>kit.id !==id))
    }
  }
  return (
    <div>
    <Navbar></Navbar>
     <Routes>
      <Route path= "/" element={
        <>
        <MyKitDetail detailData={detailData} handleClick={onKitClick}  />
        <KitBrand kitData={kitData} handleClick={onKitClick} /> 
   
        </>
      }/>
      <Route path= "/about" element={
        <About/>
        
      }/>
      
      
      <Route path= "/contact" element={
        <Contact/>
        
      }/>
      
     </Routes>
    </div>
  )
}

export default App;
