"use client"
import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import MenuItem from './MenuItem'
import ThemeCopm from './ThemeCopm'
import {  SiStackblitz } from "react-icons/si";
import { useRouter } from 'next/navigation'

const Header = () => {
    const [keyword , setKeyword] = useState('')
    const router = useRouter();
    const menu = [
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Sign in",
            url: "/login"
        }
    ]

    const searchFunc = (e) => {
        if(e.key === "Enter" && keyword.length >= 3){
            router.push(`/search/${keyword}`)
        }
    }

  return (
    <div className='flex items-center gap-1 h-20 p-1'>
        <div className=' p-2 rounded-xl sm:w-[240px] w-[100px]  sm:text-4xl text-s flex flex-row'>
        <span className='text-gradient font-bold'>FlashMovie</span>
        </div>
        <div className='flex flex-1 items-center gap-1 border-b-2 border-l-2  sm:h-12 h-7 border-[purple] p-2 rounded-md'>
            <input onKeyDown={searchFunc} onChange={e=> setKeyword(e.target.value)} placeholder='Search a movie...' className=' outline-none flex-1 bg-transparent' type='text' />
            <BiSearch size={25}  className='hover:opacity-50 duration-300 cursor-pointer'/>
        </div>
        <ThemeCopm/>
   
    </div>
  )
}

export default Header