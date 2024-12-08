interface suitType{
    image:string,
    name: string,
    rollno:string,
    batch: string|number,
    year: string,

}

import React from 'react'

const Cards = ({suit}:{suit:suitType}) => {
  return (
    <div className='bg-pink inline-block'>
        <div className="cardcontainer bg-orange-400 w-80 h-5/6 px-10 py-10 m-10 rounded-md  ">
        <div className="image w-80 h-80  p-6">
          <img src={suit.image} alt="profile-pic"  />
        </div>
        <div className="description font-bold text-center text-xl bg-white rounded px-4 py-4">
          <h3>{suit.name} </h3>
          <p>{suit.rollno} </p>
          <p>{suit.batch} </p>
          <p>{suit.year} </p>


        </div>




      </div>
      
    </div>
  )
}

export default Cards
