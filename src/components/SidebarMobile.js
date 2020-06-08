import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChartArea, FaAddressCard, FaCalendarCheck } from 'react-icons/fa'
import { BsList } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import './style.css'

export default function SideBarMobile () {
  const [menuMobile, setMenuMobile] = useState(false)
  const [menuAnimation, setMenuAnimation] = useState(false)

  function handleMenu () {
    setMenuMobile(true)
    setTimeout(() => {
      setMenuAnimation(true)
    }, 100)
  }

  function closeMenu () {
    setMenuMobile(false)
    setMenuAnimation(false)
  }

  return (
    <>
      <div className="btn-menu">
        <BsList
          color={'#ffffff'}
          size={30}
          onClick={ () => handleMenu() }
        />
      </div>
      { menuMobile &&
        <div>
          <div className="container-mobile"></div>
          {menuAnimation
            ? <div className={menuAnimation ? 'mobile-menu menu-mobile-open' : 'menu-mobile'}>
              <h1 className="logo-semantix-mobile">Semantix</h1>
              <MdClose
                color={'#ffffff'}
                size={30}
                onClick={ () => closeMenu() }
                className="btn-close-menu"
              />
              <ul>
                <li>
                  <Link to="/">
                    <span className="menu-item-icon">
                      <FaChartArea
                        color={'#ffffff'}
                        size={16}
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
                        size={16}
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
                        size={16}
                      />
                    </span>
                    <span className="menu-item-title">Page 2</span>
                  </Link>
                </li>
              </ul>
            </div> : <div></div>
          }
        </div>
      }
    </>
  )
}
