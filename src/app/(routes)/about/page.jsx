import { About } from '@/components/About'
import { Transition } from '@/components/Transition'
import React from 'react'

const aboutPage = () => {
  return (
    <div className='min-h-screen'>
        <Transition/>
        <About/>
    </div>
  )
}

export default aboutPage