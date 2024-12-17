import React from 'react'
import img from '../Assets/Icons/Genuine-OFF-ROADS-bikes-70x70.png'
import { Link } from 'react-router-dom'
const Lg_card = (props) => {
  return (
    <div className='w-80 mb-8'>
     
    
      <div className="w-full flex">
        <img src={props.img} alt="" className='w-16 h-16 lg:h-16 lg:w-16' />
        <div className='w-80 pl-3 md:w-full text-justify'>
          <h1 className='font-bold text-lg'>{props.title}</h1>
           <p className='font-semibold w-56' >{props.des} </p>

        </div>
      </div>
     </div>
  )
}

export default Lg_card
