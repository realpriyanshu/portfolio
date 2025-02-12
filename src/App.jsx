import { useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import { Bio } from './components/Bio'
import { Projects } from './components/Projects'
import { Achivements } from './components/Achivements'

function App() {


  return (
    <>
   <div className=' min-w-full min-h-screen bg-zinc-900'>
    <div className='flex justify-center'><Navbar /></div>
    <div className='flex text-gray-500  ml-96 text-xs'><Bio /></div>
    <div className='flex text-gray-500 ml-96 text-xs mt-10'><Projects/></div>
    <div className='flex text-gray-500 ml-96 text-xs mt-8'><Achivements /></div>
   
    
       
   </div>
    
    </>
  )
}

export default App
