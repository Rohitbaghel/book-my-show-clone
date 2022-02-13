import React from 'react';
import "./offer.css" 
export const GiftCart = () => {
    const image = [
        {
            img:"https://in-aps.bmscdn.com/gv/gift_my_show_25412019034153_480x295.jpg"
        },
        {
            img:"https://in-aps.bmscdn.com/gv/gift_my_show_27542019095448_480x295.jpg"
        },
        {
            img:"https://in-aps.bmscdn.com/gv/gift_my_show_27572019095730_480x295.jpg"
        },
        {
            img:"https://in-aps.bmscdn.com/gv/gift_my_show_18312019023126_480x295.jpg"
        },
        {
            img:"https://in-aps.bmscdn.com/gv/gift_my_show_18432019024353_480x295.jpg"
        },
        {
            img:"https://in-aps.bmscdn.com/gv/gift_my_show_18462019024648_480x295.jpg"
        },
        {
            img:"https://in-aps.bmscdn.com/gv/gift_my_show_18482019024856_480x295.jpg"
        },
        {
            img:"https://in-aps.bmscdn.com/gv/gift_my_show_18512019025105_480x295.jpg"
        },
        {
            img:"https://in-aps.bmscdn.com/gv/gift_my_show_18532019025324_480x295.jpg"
        },
        {
            img:"https://in-aps.bmscdn.com/gv/gift_my_show_18552019025553_480x295.jpg"
        },
        {
            img:"https://in-aps.bmscdn.com/gv/gift_my_show_18572019025701_480x295.jpg"
        },
        {
            img:"https://in-aps.bmscdn.com/gv/gift_my_show_18082019040833_480x295.jpg"
        }
    ]
  return  <>
    <div style={{backgroundColor:"#F4F4F4"}}>
        <div style={{backgroundColor:"white"}}> 
        <div style={{width:"80%", height:"300px",margin:"auto",padding:"5px"}}>
            <img style={{width:"100%", height:"100%"}} src="https://tse4.mm.bing.net/th?id=OIP.x4-PVLK0gnbCNdftVFwIFQAAAA&pid=Api" alt="" />
        </div>
        </div>
        <div className='option'style={{textAlign:"center",marginTop:"50px"}} >
            <div>
                <button className='bg-slate-100 hover:bg-white' style={{width:"250px", height:"50px",border:"1px solid #CCCCCC",}}>E-GIFT CARDS</button>
                <button className='bg-slate-100 hover:bg-white' style={{width:"250px", height:"50px",border:"1px solid #CCCCCC",}}>PHYSICAL GIFT CARDS</button>
            </div>
            <div style={{backgroundColor:"white",width:"80%",margin:"auto"}}> 
             <h2 style={{fontFamily:"inherit",marginTop:"25px",fontSize:"20px"} }>Pick a card from one themes</h2>
            <div style={{marginTop:"25px"}}>
                <button className='btn' style={{height:"35px", width:"70px",color:"gray" ,borderRadius:"20px",border:"1px solid #CCCCCC",margin:"5px"}}>All</button>
                <button className='btn' style={{height:"35px", width:"70px",color:"gray" ,borderRadius:"20px",border:"1px solid #CCCCCC",margin:"5px"}}>Generic</button>
                <button className='btn' style={{height:"35px", width:"70px",color:"gray" ,borderRadius:"20px",border:"1px solid #CCCCCC",margin:"5px"}}>Occasion</button>
                <button className='btn' style={{height:"35px", width:"70px",color:"gray" ,borderRadius:"20px",border:"1px solid #CCCCCC",margin:"5px"}}>Combos</button>
            </div>
        <div className='images'>
            <div style={{width:"95%",margin:"auto",marginTop:"50px", display:"grid" , gridTemplateColumns:"auto auto auto auto"}}>
                {image.map((el)=>{
                    return( 
                        <div style={{width:"90%",marginTop:"10px"}}><img style={{width:"100%"}} src={el.img} alt="image" /></div>
                    )
                })}
            </div>
        </div>
        </div>
            </div>

    </div>
  </>
};
