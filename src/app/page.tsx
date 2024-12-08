import React from 'react'
import Cards from '@/components/cards/page'
import { studentsList } from './utils/cards'


const Home = () => {
  
  return (
    <div className='bg-pink-400' >
      <Cards suit={studentsList[0]} />
      <Cards suit={studentsList[1]}/>
      <Cards suit={studentsList[2]}/>
      
      
      
    </div>
  )
}

export default Home
