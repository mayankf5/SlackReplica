import React from 'react';
import {FaArrowLeft, FaArrowRight, FaClock, FaSearch, FaQuestionCircle} from 'react-icons/fa';
import img1 from '../../assets/Images/image1.jpg'
import './Header.css'

const Header = () => {
  return (
    <>
        <header className="header">
            <nav className="nav">
                <div className="icons">
                    <a href="#"><FaArrowLeft /></a>
                    <a href="#"><FaArrowRight /></a>
                    <a href="#"><FaClock /></a>
                </div>
                <form action="." className="search-bar">
                    <FaSearch className='search_icons' />
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Search Acme Inc"
                      className="search-bar-input"
                    />
                  </form>
                  <div className="move-left">
                    <a href="#"><FaQuestionCircle className='faq' /></a>
                    <div className="user-img-wrapper" id="user">
                      <img src={img1} alt="User 1 Image" />
                    </div>
                  </div>
            </nav>
        </header>
    </>
  )
}

export default Header