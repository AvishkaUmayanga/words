import React from 'react'
import Header from '../components/Header'
import { guideDate } from '../guideData/GuideData'

export default function Guide() {
  return (
    <div>
      <Header/>
      <div className='flex justify-center'>
        <div className='bg-white w-[300px] my-10 p-4 rounded-2xl'>
          {guideDate.map(({shortText, meaningOfText},index)=>(
            <p key={index}>{shortText} - {meaningOfText}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
