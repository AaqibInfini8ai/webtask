import React, { useEffect, useLayoutEffect, useState } from 'react'

import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ROUTES } from '../Routes/RoutesPath'
import { SideMenu } from './SideMenu'
import Tasklogo from '../../assets/task-logo.png'
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

// import { useSelector } from 'react-redux'
export default function SidenavBar({ toggleSidebar, toggleSideNavBar }) {
    const [userMenu, setUserMenu] = useState(false)
    const [clientSetupMenu, setClientSetupMenu] = useState(false)
    const [moreCollapse, setMoreCollapse] = useState(false)
    const [pathName, setPathName] = useState('')
    const [sideMenuArray, setSideMenuArray] = useState([])
    const [activeMenu, setActiveMenu] = useState('')
    const [Windowwidth, handlewidth] = useState({ width: window.innerWidth })
    const location = useLocation()

    let SideMenuArray = [...SideMenu]
    let pathNameVar = location.pathname
    //   const userName = useSelector((state) => state.userInfo.loginUserInfo.userName)

    useLayoutEffect(() => {
        setSideMenuArray([...SideMenuArray])
    }, [])
    useEffect(() => {
        reportWindowSize()
        window.addEventListener('resize', reportWindowSize)
        
        return () => {
            window.removeEventListener('resize', reportWindowSize)
        }
    }, [Windowwidth.width])
    useEffect(() => {
        if (pathNameVar.length > 1 && pathName !== pathNameVar)
            setPathName(pathNameVar)
    }, [pathNameVar])

    const openUserMenu = () => {
        setUserMenu(!userMenu)
    }
    function reportWindowSize() {
        handlewidth({ width: window.innerWidth })
        var width = Windowwidth.width
        if (width >= 1024) {
            var id = window.document.getElementById('left-sidebar')
            var mainPageSmallToggleId = window.document.getElementById(
                'mainPageSmallToggleId',
            ) 
            id.style.removeProperty('left')
            id.style.removeProperty('display')

            
        } else {
            toggleSideNavBar(false)
        }
    }
    const activeMenuClass = (param) => {
        if (param === ROUTES.practice || param === ROUTES.settings) {
            setPathName(param)
        } else {
            setPathName(param)
            setMoreCollapse(false)
            setClientSetupMenu(false)
        }
    }

    const toggleClientSetupMenu = () => {
        setPathName('')
        setClientSetupMenu(!clientSetupMenu)
        setMoreCollapse(false)
    }

    const toggleMoreMenu = () => {
        setPathName('')
        setClientSetupMenu(false)
        setMoreCollapse(!moreCollapse)
    }

    const openSubmenu = (key) => {
        let tempArr = [...sideMenuArray]
        tempArr.map((el) => {
            if (el.key === key) {
                el.isSubMenuOpen = true
                el.active = true
            } else {
                el.isSubMenuOpen = false
                el.active = false
            }
        })
        setSideMenuArray(tempArr)
    }

    return (
        <div
            id="left-sidebar"
            className="sidebar"
            // style={{ left: toggleSidebar ? '-0px' : '-250px' }}                              
        >
            {/* <div className="navbar-brand">
                <a href="index.html">
                    <img src={logo} alt="Medifusion Logo" className="img-fluid logo" />
                </a>
                <button
                    type="button"
                    className="btn-toggle-offcanvas btn btn-sm btn-default float-right mainPageSmallToggleId"
                    style={{ display: toggleSidebar ? 'block' : 'none' }}
                    id="mainPageSmallToggleId"
                //   onClick={toggleSideNavBar}
                >
                    <i className="lnr lnr-menu fa fa-chevron-circle-left" />
                </button>
            </div> */}
            <div className="sidebar-scroll">
                {/* <div className="user-account">
          <div className="user_div">
            <img
              src={userImg}
              className="user-photo"
              alt="User Profile Picture"
            />
          </div>
          <div className={userMenu ? 'dropdown show' : 'dropdown'}>
            <span>Welcome,</span>
            <a
              onClick={openUserMenu}
              href="javascript:void(0);"
        //       className="dropdown-toggle user-name"
        //       data-toggle="dropdown"
        //     >
        //       <strong>{userName}</strong>
        //     </a>
        //     <ul
        //       className={
        //         userMenu
        //           ? 'dropdown-menu dropdown-menu-right account show'
        //           : 'dropdown-menu dropdown-menu-right account'
        //       }
        //     >
             
        //       <li onClick={() => activeMenuClass(ROUTES.settings)}>
        //         <Link className="has-arrow" to={ROUTES.settings}>
        //           <i className="icon-settings" />
        //           Settings
        //         </Link>
        //       </li>
        //       <li className="divider" />
        //       <li>
        //         <a href="/">
        //           <i className="icon-power" />
        //           Logout
        //         </a>
        //       </li>
        //     </ul>
        //   </div>
        </div> */}
                <nav id="left-sidebar-nav" className="sidebar-nav" style={{
                    top: "0px",
                    maxHeight: "calc(100% - 0px)",
                    transform: "translateX(0%)",
                    width: "256px",
                    backgroundColor: "rgb(149, 0, 20)",
                    borderColor: "rgb(149, 0, 20)"
                }}>
                    <div>
                        <img src={Tasklogo} style={{ maxWidth: "230px", }}/>
                        <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light"/>
                        <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light"/>
                    </div>
                    <ul id="main-menu" className="metismenu">
                        {sideMenuArray &&
                            sideMenuArray.map((menu, key) => {
                                return (
                                    <li
                                        key={key}
                                        onClick={() => openSubmenu(menu.key)}
                                        className={menu.active ? 'active' : ''}
                                    > 
                                        <Link to={menu.path}>
                                            {menu.image ? (
                                                <img
                                                    src={menu.image}
                                                    alt="menuIcon"
                                                    style={{ height: '20px', paddingRight: '12px' }}
                                                    className="giveclass"
                                                />
                                            ) : (
                                                <i className={menu.image} />
                                            )}
                                            <span>{menu.label}</span>
                                        { menu.SubMenu.length > 0 &&  <span className='m-3'>{  menu.active ?<FaCaretUp/>:<FaCaretDown/>}</span>}

                                            
                                        </Link>
                                        {menu.SubMenu && menu.SubMenu.length > 0 ? (
                                            <ul
                                                className={
                                                    menu.isSubMenuOpen ? 'collapse in' : 'collapse'
                                                }
                                                aria-expanded={menu.isSubMenuOpen ? 'true' : 'false'}
                                            >
                                                {menu.SubMenu.map((subMenu, k) => {
                                                    return (
                                                        <li
                                                            className={
                                                                subMenu.path === pathName ? 'active' : ''
                                                            }
                                                        >
                                                            <Link to={subMenu.path}>
                                                                {subMenu.image ? (
                                                                    <img
                                                                        src={subMenu.image}
                                                                        alt="subMenuIcon"
                                                                        style={{ height: '20px' }}
                                                                    />
                                                                ) : null}{' '}
                                                                <span>{subMenu.label}</span>
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        ) : undefined}
                                    </li>
                                )
                            })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}