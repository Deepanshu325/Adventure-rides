import React from 'react'
import img from '../Assets/Icons/Genuine-OFF-ROADS-bikes-70x70.png'
import { Link } from 'react-router-dom'
const Lg_card = (props) => {
  return (
    <div className='w-80 mb-8'>
     
    
      <div className="w-full flex">
        <img src={props.img} alt="" className='w-16 h-16 lg:h-16 lg:w-16' />
        <div className='w-80 pl-3 text-justify'>
          <h1 className='font-bold'>{props.title}</h1>
           <p>{props.des} </p>

        </div>
      </div>
     </div>
  )
}

export default Lg_card
