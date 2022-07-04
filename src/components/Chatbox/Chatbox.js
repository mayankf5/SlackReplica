import React from 'react'
import './Chatbox.css';
import {FaBolt, FaChevronRight, FaChevronDown, FaSearchPlus, FaEllipsisH, FaPhone, FaAt, FaTimes, FaUserPlus, FaAngleDoubleRight, FaSmile, FaQuoteLeft, FaPrint, FaFileCode, FaLink, FaListOl, FaListUl, FaStrikethrough, FaCode, FaBold, FaItalic, FaStar, FaUser, FaThumbtack, FaInfoCircle, FaSortDown, FaFileAlt} from 'react-icons/fa';
import user2 from '../../assets/Images/user2.jpg'
import user3 from '../../assets/Images/user3.webp'
import user4 from '../../assets/Images/user3.jpeg'
import user1 from '../../assets/Images/image1.jpg'

const Chatbox = () => {
  return (
    <>
        <section className="chatbody">
            <section className="content">
              <section className="content-header">
                <article className="channel-content-header-details">
                  <h4 className="channel-content-header-name">
                    #social-media <FaStar />
                  </h4>
                  <section className="content-header-icons">
                    <div>
                        <FaUser />
                        <span className="content-header-counter">21</span>
                    </div>
                    <div>
                    <FaThumbtack />
                    <span className="content-header-counter">1</span>
                    </div>
                    <p className="content-header-text">
                      Track and cordinate social media.
                    </p>
                  </section>
                </article>
                <button
                  className="btn-borderless btn-slack info"
                  id="info"
                  type="button"
                >
                  <FaInfoCircle />
                </button>
              </section>
              <section className="feeds">
                <article className="feed">
                  <section className="feeds-user-avatar">
                    <img src={user2} alt="User 1" width="40" />
                    <span>K</span>
                  </section>
                  <section className="feed-content">
                    <section className="feed-user-info">
                      <h4>Kabir Singh <span className="time-stamp">11:56am</span></h4>
                    </section>
                    <div>
                      <p className="feed-text">
                        No! It was my pleasure! Great to see the enthusiasm out
                        there.
                      </p>
                    </div>
                  </section>
                </article>
                <article className="feed">
                  <section className="feeds-user-avatar">
                    <img src={user3} alt="User 1" width="40" />
                  </section>
                  <section className="feed-content">
                    <section className="feed-user-info">
                      <h4>
                        Acme Team <span className="tag">app</span>
                        <span className="time-stamp">12:45pm</span>
                      </h4>
                    </section>
  
                    <p className="feed-text">Events starting in 15 minutes:</p>
                    <div className="quoted">
                      <h5>Team Status meeting</h5>
                      <p className="quoted-text">Today from 1:00PM to 1:30PM</p>
                    </div>
                  </section>
                </article>
                <article className="feed">
                  <section className="feeds-user-avatar">
                    <img src={user4} alt="User 1" width="40" />
                  </section>
                  <section className="feed-content">
                    <section className="feed-user-info">
                      <h4>Savlon Bhai <span className="time-stamp">12:58pm</span></h4>
                    </section>
                    <div>
                      <p className="feed-text">
                        Quick note: today <span className="mention">@Lisa</span> will
                        join our team sync to provide updates on the launch, if
                        you have questions, bring 'em. See you all later... in
                        2 minutes.
                      </p>
                    </div>
                  </section>
                </article>
                <article className="feed">
                  <section className="feeds-user-avatar">
                    <img src={user1} alt="User 1" width="40" />
                  </section>
                  <section className="feed-content">
                    <section className="feed-user-info">
                      <h4>Preeti <span className="time-stamp">1:48pm</span></h4>
                    </section>
                    <p className="feed-text">
                      Meeting notes from our sync with<span className="mention"
                        >@Liza</span
                      >.
                    </p>
                    <div className="quoted-file">
                      <div className="preparatory-text">
                        <p>Post</p>
                        <FaSortDown />
                      </div>
                      <div className="file-figure">
                        <FaFileAlt />
                        <div className="file-detail">
                          <h5>1/9 Meeting Notes</h5>
                          <small>Last edited just now</small>
                        </div>
                      </div>
                    </div>
                  </section>
                </article>
                <article className="feed">
                  <section className="message-info">
                    <article className="zenith-org">Z</article>
                    <small
                      ><strong>Zenith Marketing</strong> is in this
                      channel.</small
                    >
                  </section>
                </article>
              </section>
              <form action="." className="form" name="feedForm">
                <div className="input" id="textBox" contenteditable="true">
                  <p>Message #social-media</p>
                </div>
                <div className="input-toolbar-icons">
                  <div className="move-right">
                    <FaBolt className='fabolt' />
                    <FaBold className='fabold' />
                    <FaItalic className='faitalic' />
                    <FaStrikethrough className='fastrikethrough' />
                    <FaCode className='facode' />
                    <FaLink className='falink' />
                    <FaListOl className='falistol' />
                    <FaListUl className='falistul' />
                    <FaQuoteLeft className='faquoteleft' /> 
                    <FaFileCode className='fafilecode' />
                    <FaPrint className='faprint' />
                  </div>
                  <div className="move-left">
                    <FaAt />
                    <FaSmile />
                    <button type="submit" className="btn-borderless button">
                        <FaAngleDoubleRight />
                    </button>
                  </div>
                </div>
                <div className="input-toolbar-selection"></div>
              </form>
            </section>
            <section className="right-sidebar">
              <section className="right-sidebar-header">
                <article className="right-sidebar-header-details">
                  <h4 className="right-sidebar-header-name">Details</h4>
                  <p>#social-media</p>
                </article>
                <FaTimes className='fatimes' />
              </section>
              <section className="right-sidebar-contact">
                <article className="right-sidebar-contact-details">
                  <span><FaUserPlus /></span>
                  <p>Add</p>
                </article>
                <article className="right-sidebar-contact-details">
                  <span><FaSearchPlus /></span>
                  <p>Find</p>
                </article>
                <article className="right-sidebar-contact-details">
                  <span><FaPhone/></span>
                  <p>Call</p>
                </article>
                <article className="right-sidebar-contact-details">
                  <span> <FaEllipsisH /></span>
                  <p>More</p>
                </article>
              </section>
  
              <section className="right-sidebar-about">
                <article className="about-header">
                  <h4>About</h4>
                  <FaChevronDown />
                </article>
                <article className="about-details">
                  <div className="about-detail">
                    <h5>Topic</h5>
                    <p>Track and cordinate social media</p>
                  </div>
                  <div className="about-detail">
                    <h5>Description</h5>
                    <p>Home of the social media team</p>
                  </div>
                  <div className="about-img">
                    <div className="about-img-wrapper">
                      <img src={user2} width="40" alt="User 1" />
                    </div>
                    <small>Created on October 8th, 2020</small>
                  </div>
                </article>
              </section>
              <section className="other-section">
                <article className="other-section-header">
                  <h4>Members</h4>
                  <div>
                    <span>21 <FaChevronRight /></span>
                  </div>
                </article>
              </section>
              <section className="other-section">
                <article className="other-section-header">
                  <h4>Organizations</h4>
                  <div>
                    <span className="zenith-org">Z</span>
                    <span className="acme-org">A</span>
                    <span> 2 <FaChevronRight /></span>
                  </div>
                </article>
              </section>
              <section className="other-section">
                <article className="other-section-header">
                  <h4>Pinned</h4>
                  <div>
                    <span>1 <FaChevronRight />  </span>
                  </div>
                </article>
              </section>
              <section className="other-section">
                <article className="other-section-header">
                  <h4>Shortcuts</h4>
                  <div>
                    <span>1 <FaChevronRight /></span>
                  </div>
                </article>
              </section>
            </section>
        </section>
    </>
  )
}

export default Chatbox