import React from 'react'
import { useState } from 'react'
export default function Counter(){
    const[count,setcount]=useState(0)
    function Inc(){
        document.getElementsByTagName('div')[0].innerText="Hello"
    }
    return(
        <>
        <div>Counter {count}</div>
        <button onClick={(()=>setcount(count+1))}>+</button>

        <button onClick={(()=>setcount(count-1))}>-</button>
        </>
    )
}