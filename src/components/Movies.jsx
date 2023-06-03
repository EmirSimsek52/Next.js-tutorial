"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Movies = ({dt}) => {
    const router = useRouter();
    console.log(dt,"dt")
  return (
    <div onClick={() =>router.push(`/movie/${dt?.id}`)} className='w-[450px] h-[300px] relative imgContainer cursor-pointer '>
        <Image style={{objectFit: 'cover'}} width={400} height={400}   src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} />      
        <div className="absolute bottom-0 px-3 w-full h-full flex flex-col justify-end ">
            <div className='text-2xl font-bold'>{dt?.title}</div>
            <div>Release: {dt?.release_date} Rate: {dt?.vote_average}</div>
        </div>
    </div>
  )
}

export default Movies