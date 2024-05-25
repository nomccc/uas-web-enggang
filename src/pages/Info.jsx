import React from 'react'
import Habitat from '../components/Habitat'
import Informasi from '../components/Informasi'
import Setia from '../components/Setia'

const Info = () => {
  return (
    <div className="bg-sky bg-cover w-full pb-32">
      <Habitat/>
      <Informasi/>
      <Setia/>
    </div>
  )
}

export default Info