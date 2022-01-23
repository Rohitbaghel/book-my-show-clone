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
        <div className='option'style={{textAlign:"center"}} >
            <div>
                <button style={{width:"250px", height:"50px",border:"1px solid #CCCCCC",color:"gray"}}>E-GIFT CARDS</button>
                <button style={{width:"250px", height:"50px",border:"1px solid #CCCCCC", color:"gray"}}>PHYSICAL GIFT CARDS</button>
            </div>
             <h2 style={{fontFamily:"inherit",marginTop:"25px"} }>Pick a card from one themes</h2>
            <div style={{marginTop:"25px"}}>
                <button className='btn' style={{height:"35px", width:"70px",color:"gray" ,borderRadius:"20px",border:"1px solid #CCCCCC",margin:"5px"}}>All</button>
                <button className='btn' style={{height:"35px", width:"70px",color:"gray" ,borderRadius:"20px",border:"1px solid #CCCCCC",margin:"5px"}}>Generic</button>
                <button className='btn' style={{height:"35px", width:"70px",color:"gray" ,borderRadius:"20px",border:"1px solid #CCCCCC",margin:"5px"}}>Occasion</button>
                <button className='btn' style={{height:"35px", width:"70px",color:"gray" ,borderRadius:"20px",border:"1px solid #CCCCCC",margin:"5px"}}>Combos</button>
            </div>
        </div>
        <div className='images'>
            <div style={{width:"85%",margin:"auto",marginTop:"50px", display:"grid" , gridTemplateColumns:"auto auto auto auto"}}>
                {image.map((el)=>{
                    return( 
                        <div style={{width:"90%",marginTop:"10px"}}><img style={{width:"100%"}} src={el.img} alt="image" /></div>
                    )
                })}
            </div>
        </div>

    </div>
  </>
};
