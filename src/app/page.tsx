import { Metadata } from 'next'
import React from 'react'
export const metadata:Metadata = {
  title:"Home page | DeCo",
  description:"This is our home page"
}
export default function Home() {
  return (
    <div>
      <h1 className='text-center font-bold'>This is Home page</h1>
    </div>
  )
}
