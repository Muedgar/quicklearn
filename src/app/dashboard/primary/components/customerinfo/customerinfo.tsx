'use client'
import React from 'react'
import Fielditem from './fielditem'




function Customerinfo() {
  
  return (
    <div className='w-[100%] flex-col justify-between'>
        <div className='flex'>
          <Fielditem title='Email' type='email' stepKey={1} />
          <Fielditem title='First Name' type='text' stepKey={2} />
          <Fielditem title='Last Name' type='text' stepKey={3} />
          <Fielditem title='Phone Number' type='tel' stepKey={4} />
        </div>
    </div>
  )
}

export default Customerinfo