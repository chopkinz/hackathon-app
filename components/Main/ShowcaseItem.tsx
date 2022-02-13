import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Props {
  common_name: string
  scientific_name: string
  status: string
  family: string
  order: string
  class: string
  phylum: string
  kingdom: string
  genus: string
  species?: string
  image: string
}

export const ShowcaseItem = (props: Props) => {
  return(
    <div className="w-[800px] h-[160px] border-2 border-solid rounded-3xl drop-shadow-lg">
        <div className="flex pl-7 pt-3 content-center items-center">
          <div className="flex-none w-48 h-48">
            <img src={props.image} className="object-scale-down" alt="Animal Photo" />
          </div>
          <div className="flex-initial w-64">
            <p className='font-sans'>{props.scientific_name}</p>
          </div>
          <div className="flex-initial w-32">
            03
          </div>
      </div>
    </div>
  )
}