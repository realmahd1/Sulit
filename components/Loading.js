import React from 'react'
import ReactLoading from 'react-loading';

export default function Loading() {
    return (
        <div className='flex flex-col items-center justify-center h-[100vh] w-full absolute top-0 left-0'>
          <ReactLoading type={'balls'} color={'#ffa144'} height={'6%'} width={'6%'} />
        </div>
    )
}
