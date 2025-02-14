import './App.css'
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Bio } from './components/Bio'
import { Projects } from './components/Projects'
import { Achivements } from './components/Achivements'
import { Resume } from './components/Resume'

function App() {


  return (
    <>
    <div className=' min-w-full min-h-screen bg-zinc-900 '>
    <div className='flex justify-center'><Navbar /></div>
    <div className='flex text-gray-500  ml-96  mt-5'><Bio /></div>
    <div className='flex text-gray-500 ml-93  mt-10'><Projects/></div>
    <div className='flex text-gray-500 ml-96  mt-8'><Achivements /></div>   
    <div className='flex text-gray-500 ml-96  mt-8'><Resume /></div>   
   </div>
    
    </>
  )
}

export default App
