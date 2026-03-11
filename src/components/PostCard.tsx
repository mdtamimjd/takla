import React from 'react'
// API theke asha single post-er structure
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default async function PostCard() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const post = await res.json()
   return (
    <div>
        {post.map((d:Post,i:number)=>(
            <div key={d.id} className='p-2 border-b-2'>
                <h2 className='text-2xl font-semibold'><span className='text-4xl font-bold text-orange-500'>+ </span>{d.title}</h2>
                <p className='text-lg'>{d.body}</p>
            </div>
        ))}
    </div>
  )
}
