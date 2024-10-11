import React from 'react'

function Album({title , artist}) {
  return (
    <div className='relative flex justify-center  '>
<div className='whitespace-nowrap overflow-hidden inline-block absolute z-10'>
      <p className='font-mono font-bold text-nowrap text-2xl   animate-marquee '>{title} by {artist}</p>
</div>

      <p className='font-mono font-bold text-white text-sm text-nowrap absolute z-10 top-10 '>Lorem ipsum dolor sit amet  .</p>
    </div>
  )
}

export default Album
