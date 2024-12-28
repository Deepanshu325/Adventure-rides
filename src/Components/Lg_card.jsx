import React from 'react'
const Lg_card = (props) => {
  return (
    <div className='w-[96%] mb-8 mx-auto '>


      <div className="w-full flex">
        <img src={props.img} alt="" className='w-16 h-16 lg:h-16 lg:w-16' />
        <div className='w-full pl-3 mx-auto md:w-full '>
          <h1 className='font-bold text-lg'>{props.title}</h1>
          <p className='font-semibold w-full' >{props.des} </p>

        </div>
      </div>
    </div>
  )
}

export default Lg_card
