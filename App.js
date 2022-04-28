import React from 'react'
import Chats from './Chats'
import Sidebar from './Sidebar'

const App = () => {
  return (
    <div className='row app mt-3'>
      <Sidebar />
      <Chats />
    </div>
  )
}

export default App