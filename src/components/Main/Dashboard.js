import React from 'react'
import './Dashboard.css'
import Sidebar from './Sidebar/Sidebar'
import Chatbox from '../Chatbox/Chatbox'

const Dashboard = () => {
  return (
    <main className='main'>
        <Sidebar />
        <Chatbox />
    </main>
  )
}

export default Dashboard