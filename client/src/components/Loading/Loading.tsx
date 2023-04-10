import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className='bg-zinc-800  bg-gradient-to-r from-zinc-800 to-zinc-900 h-screen flex items-center justify-center'>
      <div className="flex flex-col items-center">
        <CircularProgress disableShrink/>
        <p className='pt-6 text-slate-100'>Loading...</p>
      </div>
    </div>
  )
}

export default Loading