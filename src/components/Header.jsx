import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate= useNavigate()
  function handleAddClick(){
    navigate('/add-student')
  }
  return (
    <div className='flex justify-items-start gap-x-3.5 p-4 border-b-2 border-orange-600 bg-orange-300 '>
      <p className='text-xl '>Student Management Portal</p>
      <button onClick={handleAddClick} className=' flex items-endjustify-end'>Add Student</button>
    </div>
  )
}
