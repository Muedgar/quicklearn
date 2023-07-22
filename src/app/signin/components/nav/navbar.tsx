import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='w-screen flex justify-center items-center mt-10'>
        <Link href='/landing'>
            <img src='./quicklearn.png' width={200} height={45} />
        </Link>
    </div>
  )
}

export default Navbar