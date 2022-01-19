import React from 'react'

const Location = () => {
    return (
        <div className="bg-white border 3/5 ">
            <input type="text" placeholder="Search for Your City" className="w-4/5 h-10 border" />
            <button className="w-1/12 rounded-lg border-4 h-10 text-lg font-bold hover:bg-red-600">Submit</button>
            <p className='text-center'>Popular Cities</p>
            <div className='flex gap-2 '>
                <div className='w-1/6 '>
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png" alt="" />
                    <p className="text-center text-slate-800 font-bold">Mumbai</p>
                </div>
                <div className='w-1/6 '>
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png" alt="" className='w-24 -mt-2 ml-4' />
                    <p className="text-center text-slate-800 font-bold -ml-4 mt-1">NCR</p>
                </div>
                <div className='w-1/6 '>
                    
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/bang.png" alt="" />
                    <p className="text-center text-slate-800 font-bold">Bengaluru</p>
                </div>
                <div className='w-1/6 '>
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png" alt="" className='w-24 -mt-4 ml-4' />
                    <p className="text-center text-slate-800 font-bold">Hyderabad</p>
                </div>
                <div className='w-1/6 '>
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png" alt="" />
                    <p className="text-center text-slate-800 font-bold">Ahmedabad</p>
                </div>
                <div className='w-1/6 '>
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/chd.png" alt="" className='w-28  ml-4' />
                    <p className="text-center text-slate-800 font-bold">Chandigarh</p>
                </div>
                <div className='w-1/6 '>
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/chen.png" alt="" className='w-28 -mt-2 ml-4' />
                    <p className="text-center text-slate-800 font-bold">Chennai</p>
                </div>
                <div className='w-1/6 '>
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/pune.png" alt="" />
                    <p className="text-center text-slate-800 font-bold">Pune</p>
                </div>
                <div className='w-1/6 '>
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png" alt="" />
                    <p className="text-center text-slate-800 font-bold">Kolkata</p>
                </div>
                <div className='w-1/6 '>
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/koch.png" alt="" />
                    <p className="text-center text-slate-800 font-bold">Kochi</p>
                </div>
            </div>
        </div>
    )
}

export default Location
