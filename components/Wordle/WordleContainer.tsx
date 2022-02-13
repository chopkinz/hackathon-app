import { useEffect, useState } from 'react'
import { WordleRow } from './WordleRow';

export const WordleContainer = () => {
  return(
    <div className="game w-[800px] h-[800px]">
      <div className="grid grid-rows-5">
        <WordleRow />
        <WordleRow />
        <WordleRow />
        <WordleRow />
        <WordleRow />
      </div>
    </div>
    
  )
}