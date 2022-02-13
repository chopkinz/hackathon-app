import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Props {
  commonName: string
  scientificName: string
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
    <div className="w-[800px] h-[200px] bg-red-600">
        <div className="flex p-3">
          <div className="flex-none w-48 h-24">
            <img src={props.image} alt="Animal Photo" />
          </div>
          <div className="flex-initial w-64">
            02
          </div>
          <div className="flex-initial w-32">
            03
          </div>
      </div>
    </div>
  )
}