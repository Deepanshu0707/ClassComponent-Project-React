import React from 'react'
import Spinner from './Spinner.gif'
function Loading(){
  return (
      <div className='text-center'>
        <img className='my-1' src={Spinner} alt="Loading"/>
      </div>
    )
  
}

export default Loading