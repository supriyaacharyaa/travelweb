import React, { useState }  from 'react'
import a from './Data' 

function Home(){
    

    return(
       <>
       <div className="container py-4 my-3">
        <div className="row">
        <div className="col-lg-12">
            <img className='w-100' src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-freestockpro-3278215.jpg&fm=jpg" alt="" />
        </div>

        </div>
        <section className='py-4'>
            <h4 className='text-bold'>Explore To Destination</h4>
            <div className="row">
            {a.map((item)=>(
                <div className="col-lg-4">

    <div className="shadow p-3 m-2" key={item.id}>
        
      <img className='obj w-100' src={item.image} alt="" />  
      <h5 className='text-bold'>{item.location}</h5>
      <p>{item.description}</p>
      
    </div>

                </div>
                ))}
            </div>
        </section>
        <section className='py-4'>
           <h4>Our Services</h4>
           <img className='w-100 objc hei' src="https://content.jdmagicbox.com/v2/comp/nashik/v9/0253px253.x253.240622131356.m5v9/catalogue/travel-point-muktidham-road-nashik-travel-agents-qlz24uu97b.jpg" alt="" />
        </section>
        <section className='py-4'>
           <h4>Rating</h4>
           <img className='w-100 heiz' src="https://cms.podium.com/wp-content/uploads/2021/02/Reviews-Image-1-640x640.jpg" alt="" />
        </section>
       </div>
       <div className=' my-4 border'>

       </div>
       </> 
    )
}
export default Home;