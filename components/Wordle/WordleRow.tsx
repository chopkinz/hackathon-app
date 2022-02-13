import { useEffect, useState } from 'react'
import { Block } from './Block';

export const WordleRow = () => {
  return(
    <div className="grid grid-cols-5 gap-5">
        <Block letter='A' status={0} />
        <Block letter='A' status={0} />
        <Block letter='A' status={0} />
        <Block letter='A' status={0} />
        <Block letter='A' status={0} />
    </div>
  )
}