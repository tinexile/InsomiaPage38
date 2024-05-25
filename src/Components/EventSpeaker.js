import React from 'react'
import bg from '../Assests/images/terren-hurst-blgOFmPIlr0-unsplash.jpg'
const EventSpeaker = () => {
  return (
   <>
   <div className='  my-14 relative grid text-center' >
    <img src={bg} alt=""  className='h-[500px] w-full bg-cover relative'/>
    <div className='absolute left-0 top-[30%] ' >
        <div className=' text-white mb-6 text-center' >
            <h1 className='text-4xl font-bold mb-6' >Become an <span className=' border-b-4 border-[rgb(116,213,235)] text-[rgb(116,213,235)]' >event Speaker?</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lacus ante. Donec tellus neque, porttitor vitae consectetur vitae, tincidunt at lorem. In vitae mollis nunc, sit amet aliquam ligula. Maecenas malesuada erat eros, sit amet interdum turpis tincidunt mollis.</p>
        </div>
        <button className='bg-white p-2 px-4 rounded-full font-bold ' >Register Today</button>
    </div>
   </div>
   
   </>
  )
}

export default EventSpeaker