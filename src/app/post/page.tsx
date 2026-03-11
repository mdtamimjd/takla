import PostCard from '@/components/PostCard'
import React from 'react'
import type { Metadata } from 'next'

export const metadata:Metadata = {
    title:"Post page",
    description:"All post hear",
    openGraph:{
        title:"Show all post",
        description:"You can see description",
        images:"/image.webp"
    },
    twitter:{
        title:"Show all new post",
        description:"Now see des",
        images:"/image.webp"
    }
}
export default function page() {
  return (
    <div>
        <h1 className='text-center'>All post show</h1>
        <PostCard/>
    </div>
  )
}
