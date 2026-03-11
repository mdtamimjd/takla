"use client"
import React from 'react'
interface ErrorProps {
    error:Error;
    reset: ()=> void;
}
export default function Error({error,reset}:ErrorProps) {
  return (
    <div>
        <h2>Something is wrong!</h2>
        <p>{error.message}</p>
        <button onClick={()=>reset()}>Try agen</button>
    </div>
  )
}
