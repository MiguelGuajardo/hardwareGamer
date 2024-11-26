import React from 'react'

export const Button = ({text}) => {
  return (
    <button className='bg-white px-4 py-2 border rounded-lg hover:bg-gray-100 mr-4'>
      {text}
    </button>
  )
}
