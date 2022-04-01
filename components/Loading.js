import React from 'react'
import ReactLoading from 'react-loading';

export default function Loading() {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh'
          }}>
            <ReactLoading type={'balls'} color={'#ffa144'} height={'6%'} width={'6%'} /></div>
    )
}
