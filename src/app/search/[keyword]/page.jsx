import React from 'react'
import Movies from '@/components/Movies';
const Page = async({params}) => {
    const keyword= params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ba32172315862060440960e04ac7bc20&query=${keyword}&language=en-US&include_adult=false`)
    const data= await res.json();
    console.log(data?.results, "data")
    return (
    <div>
        {
            !data?.results ? 
            <div>Bulunamadı</div>
            : 
            <div className='flex items-center flex-wrap gap-3'>
                {
                    data?.results?.map((dt,i) =>(
                    <Movies key={i} dt={dt} />
                    ))
                }
            </div>
        }
    </div>
  )
}

export default Page