import React from 'react'
import InputFields from './InputFields'

function WordDetailsField({wordType, inputField}) {
  return (
    <div>
        <div className=' w-[300px] bg-bluebg  rounded-2xl p-3 mt-5 xs:w-[350px]'>
            <div className='flex'>
                <div className='text-lg font-semibold'>
                    <h3>{wordType}</h3>
                </div>
            </div>
            {inputField && inputField.map((field,index) => (
                <InputFields key={index} label={field.label} name={field.name} onChange={field.onChange} />
            ))}
            
        </div> 
    </div>
  )
}

export default WordDetailsField