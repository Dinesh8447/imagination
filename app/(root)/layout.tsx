import Mobilenave from '@/components/shared/Mobilenave'
import Sidebar from '../../components/shared/Sidebar'
import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <main className='root'>
      <Sidebar/>
      <Mobilenave/>
        <div className='root-container'>
            <div className='wrapper'>
                {children}
            </div>
        </div>
    </main>
  )
}
