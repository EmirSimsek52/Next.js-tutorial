import Link from 'next/link'
import React from 'react'

const MenuItem = ({mn}) => {
  return (
        <Link className='hover:opacity-50 duration-300' href={mn.url}>
            {mn.name}
        </Link>
  )
}

export default MenuItem