import React from 'react'
// import ComponentF from './ComponentF'
import { userContext, channelContext } from '../App'

function ComponentE() {

   const user = userContext(userContext)
   const channel = userContext(channelContext)
   
    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default ComponentE
