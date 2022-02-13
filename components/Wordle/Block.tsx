import { useEffect, useState } from 'react'

enum LetterStatus {
  Correct,
  Exists,
  DoesNotExist,
  Empty
}

interface Props {
  letter: string
  status: LetterStatus
}

export const Block = (props: Props) => {
  return(
    <div className={`w-20 h-20 m-auto border border-slate-900`}>
      <div className="w-full h-full text-center cursor-default select-none">
        {props.letter}
      </div>
    </div>
  )
}