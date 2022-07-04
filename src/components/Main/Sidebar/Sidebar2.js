import React from 'react';
import './Sidebar2.css';
import {FaHashtag, FaLock, FaChevronDown, FaCircle, FaEdit, FaMinus, FaCommentDots, FaAt, FaArrowDown, FaSortDown} from 'react-icons/fa'


const Sidebar2 = () => {
  return (
    <>
      <article className="sidebar-2">
        <section className="sidebar-user">
          <div className="sidebar-user-info">
            <h4>Acme Inc.</h4>
            <FaChevronDown className="sidebar-user-info-icon" />
          </div>
          <p className="sidebar-user-info-additional">
          <FaCircle className="sidebar-user-info-additional-icon" />Sharon Robinson
          </p>
          <span className="user-edit-icon"><FaEdit className="user-edit-icon-icon" /></span>
        </section>
               {/* <!-- All Unread Wala Section --> */}
        <section className="unread">
          <h4 className="unread-header">
            <span className="unread-icons">
              {/* <FaMinus className="line" />
              <FaMinus className="line" />
              <FaMinus className="line" /> */}
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </span>
            All unread
          </h4>
          <ul>
            <li>
              <a href="#"><FaCommentDots />Threads</a>
            </li>
            <li>
              <a href="#"><FaAt />Mentions &amp; reactions</a>
            </li>
            <li>
              <a href="#"><FaArrowDown />Show more</a>
            </li>
          </ul>
        </section>
                    {/* <!-- Channel wala section  --> */}
        <section className="channels">
          <h4 className="channels-header">
          <FaSortDown className="faSortdown" /> Channels
          </h4>
          <ul>
            <li>
              <a href="#"><FaHashtag className="fahashtag" />design-crit</a>
            </li>
            <li>
              <a href="#"
                ><span className="font-highlight"
                  ><FaHashtag className="fahashtag"/>design-team</span
                ><span className="red-online">1</span></a
              >
            </li>
            <li>
              <a href="#"><span className="make-white"><FaCircle className="facircle-online" />Hubspot</span></a>
            </li>
            <li className="active">
              <a href="#"><FaHashtag className="fahashtag"/>social-media</a>
            </li>
            <li>
              <a href="#"><FaLock/>team-chat</a>
            </li>
          </ul>
        </section>
        <section className="channels">
          <h4 className="channels-header">
            <FaSortDown/> Announcements
          </h4>
          <ul>
            <li>
              <a href="#"><FaHashtag />annoucements</a>
            </li>
            <li>
              <a href="#"><FaHashtag />media-and-pr</a>
            </li>
            <li>
              <a href="#"><FaHashtag />released</a>
            </li>
            <li>
              <a href="#"><FaHashtag />team-sf</a>
            </li>
          </ul>
        </section>
        </article>
    </>
  )
}

export default Sidebar2