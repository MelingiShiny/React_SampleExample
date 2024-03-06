import React, {useContext} from 'react'
import { userContext, ChannelContext } from '../../App'

function ComponentC() {

  const user = useContext(userContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
      {user} - {channel}
    </div>
  )
}

export default ComponentC