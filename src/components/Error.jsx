import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='text-center bg-red-700 p-2 rounded-md'>
      <p className='font-bold text-white text-1xl'> {mensaje} </p>
    </div>
  )
}

export default Error
