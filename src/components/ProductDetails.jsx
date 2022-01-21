import React, {useEffect, useState} from 'react';

export const ProductDetails=() => {
    const [data, setData]=useState({})
    const getMoviesDatabyID= async () => {
        try {
            let res=await fetch(`http://localhost:3600/movies/61e91c76d0ff80b073c000ef`) 
            let result = await res.json()
            console.log(result)
            setData(result)
            // console.log(data)
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getMoviesDatabyID()
    },[])
    return <>
        {/* style={{backgroundImage:`url(${1})`}} */}
        <div>
            <div className="flex border-2 bg-black"> 
                <div className=' mx-20  border-4 w-1/6 h-80'>
                    <img src={data.cover_image_url} alt=""className="w-full h-full" />
                </div>
                <div>
                    <p className="text-4xl font-bold mt-10 text-white">{data.movie_name}</p>
                </div>
            </div>
     </div>
          
   
    </>;
};
