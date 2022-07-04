import React from 'react';
import Sidebar2 from './Sidebar2';
import Sidebar1 from './Sidebar1';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
        <section className="sidebar">
            <Sidebar1 />
            <Sidebar2 />
        </section>
    </>
  )
}

export default Sidebar