"use client"
import { useEffect, useState } from "react";

export default function Home() {
const [number, setNumber] = useState(1)
const [showNow, setShowNot] = useState(false)

function add(){
    setNumber(number+1)
}
function substract(){
    setNumber(number-1)
}

useEffect(()=>{
 if(number%5==0){
    setShowNot(true)
 } else {
    setShowNot(false)
 }
}, [number])


  return (
    <div className="p-12 text-5xl text-center">
    <div className="mb-12">{number}</div>
    <button className="border" onClick={add}>Add</button>
    <button className="ml-12 border" onClick={substract}>Subs</button>

    <div>useState</div>
    <div>useEffect</div>

    {showNow==true ? <div className="h-64 w-64 bg-red-500 mt-12"></div> : <></>}
  </div>
  );
}
