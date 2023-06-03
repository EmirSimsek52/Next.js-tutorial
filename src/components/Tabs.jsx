"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from "next/navigation"
const Tabs = () => {
    const searchParams = useSearchParams()
    const genre= searchParams.get('genre')



    const tabs= [
        {
            name: "#Popular",
            url : "popular"
        },
  
        {
            name :"#Upcoming",
            url : "upcoming"
        }
    ]
  return (
    <div className='p-5 m-5 bg-gray-300 rounded-lg dark:bg-[#2D033B] flex items-center justify-center gap-7' >
        {
                tabs.map((tab, i) => (
                    <Link className={`cursor-pointer hover:opacity-50 duration-300 ${tab.url === genre ? "underline underline-offset-8 text-gradient font-bold": ""}`} 
                    href={`/?genre=${tab.url}`}> {tab.name} </Link>
                ))
        }
    </div>
  )
}

export default Tabs