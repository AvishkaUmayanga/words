import React from 'react';

function SectionDetails({ sectionName, data }) {
  if(sectionName==='_id' || sectionName==='word' || sectionName==='wordMeaning' || sectionName==='__v'){
    return null;
  }
  
  const checkHasNull = Object.values(data).some(item => item===null)
  if(checkHasNull){
    return null;
  }
  
  return (
    <div className='w-[310px] bg-bluebg rounded-2xl p-3 mb-4  xs:w-[350px]'>
      <div className='flex justify-between mb-3'>
        <div className='text-lg font-semibold'>
          <h3>{sectionName}</h3>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        {Object.entries(data).map(([key, value]) =>(
          <div key={key} className='bg-white w-[135px] h-[90px] rounded-lg flex flex-col p-1 xs:w-[150px] xs:h-[100px]'>
            <div className='flex text-sm'>
              <h3>{key}</h3>
            </div>
            <div className='flex justify-center h-full py-4 text-center'>
              <p>{value}</p>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}

export default SectionDetails;
