import React from 'react'

export default function InputFields({ label, name, onChange }) {
  return (
    <div>
      <div className='flex items-center justify-between mb-5'>
        <label>
            <p>{label}:</p>
        </label>
        <input
        type="text"
        name={name}
        className='w-[180px] h-8 border'
        onChange={onChange}
      />
     </div>
    </div>
  )
}
