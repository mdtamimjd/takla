import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const navigationManu = [
        {name:"home",path:"/"},
        {name:"post",path:"/post"},
        {name:"services",path:"/services"},
        {name:"contact",path:"/contact"}
    ]
  return (
    <header>
        <nav className='w-full p-4  flex justify-between items-center'>
            <Link href={"/"}>DeCo😍</Link>
            <ul className='flex items-center space-x-2 md:space-x-5'>
                {navigationManu.map((d,i)=> <li className='hover:underline' key={i}><Link href={d.path} className='capitalize'>{d.name}</Link></li>)}
                
            </ul>
        </nav>
    </header>
  )
}
