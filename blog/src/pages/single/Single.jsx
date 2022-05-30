import React from 'react'
import Sidebar from '../../sidebar/Sidebar'

import "./single.css"
import SinglePost from '../singlepost/SinglePost'

export default function Single() {
  return (
    <div className='single'>
        
        {/* post */}

        <SinglePost/>
        <Sidebar/>
        
        </div>
  )
}
