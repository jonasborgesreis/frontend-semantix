import React from 'react'
import { Link } from 'react-router-dom'
import { FaChartArea, FaAddressCard, FaCalendarCheck } from 'react-icons/fa'
// import './style.css'

export default function SideBar () {
  return (
    <div>
      <h1 className="logo-semantix">Semantix</h1>
      <ul className="list-menu">
        <li>
          <Link to="/">
            <span className="menu-item-icon">
              <FaChartArea
                color={'#ffffff'}
                size={20}
              />
            </span>
            <span className="menu-item-title">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/page1">
            <span className="menu-item-icon">
              <FaAddressCard
                color={'#ffffff'}
                size={20}
              />
            </span>
            <span className="menu-item-title">Page 1</span>
          </Link>
        </li>
        <li>
          <Link to="/page2">
            <span className="menu-item-icon">
              <FaCalendarCheck
                color={'#ffffff'}
                size={20}
              />
            </span>
            <span className="menu-item-title">Page 2</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
