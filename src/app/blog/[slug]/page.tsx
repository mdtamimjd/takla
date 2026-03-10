import React from 'react'
interface props {
    params:{
        slug:string
    },
    searchParams:{
        search?:string,
        filter?:string
    }
}
export default async function page({params,searchParams}:props) {
    const {slug} = await params;
    const {search} = await searchParams;
    console.log(slug)
    console.log(search)
  return (
    <div>page</div>
  )
}
