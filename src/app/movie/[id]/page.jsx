import React from 'react'
import Image from 'next/image'
const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ba32172315862060440960e04ac7bc20`)
    return await res.json();
}

const Page = async ({params}) => {
    const id = params.id;
    const movieDetail = await getMovie(id);

    console.log(movieDetail, "movieDetail")
  return (
    <div className=" p-7   flex sm:flex-row flex-col justify-center items-center">
        <div className='felx flex-col'>
                <Image width={2000} height={600}  src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} />   
                
                    {
                        movieDetail?.genres[0].name ?
                        <div className='flex flex-row justify-center'>
                        <div className='text-xl text-gradient2 px-10 font-bold'>#{movieDetail?.genres[0].name}</div>
                        <div className='text-xl text-gradient2 px-10 font-bold'>#{movieDetail?.genres[1].name}</div>
                        
                        </div>
                        :
                        <div></div>
                    }
                       
               
         </div>
         <div className="sm:ml-5">
                <div className='text-6xl  my-3 text-gradient2'>{movieDetail?.title}</div>
                <div className='text-xl sm:w-1/2'>{movieDetail?.overview}</div>
                <div className='mt-4'>Budget: {movieDetail?.budget}$</div>
                <div className='text-3xl mt-5' >Release: {movieDetail?.release_date} Rate: {movieDetail?.vote_average}</div>
                <div className='text-3xl mt-5' >Runtime: {movieDetail?.runtime} Min.</div>
                <div className='mt-5'>For link: <a className='text-gradient2 font-bold' href={movieDetail?.homepage}>Click Here.</a></div>
         </div>
    </div>
  )
}

export default Page