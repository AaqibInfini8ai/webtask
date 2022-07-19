import React, { Suspense, useState, useEffect } from "react";
import SidenavBar from "./SideNavbar";
import { Outlet } from "react-router-dom";

export default function Index(props) {
  const [toggleSideNavBar, setToggleSideNavBar] = useState(true);
  const [toggleSideNavBarOnSmallScreen, setToggleSideNavBarOnSmallScreen] =
    useState(false);

  const toggleSidebar = () => {
    setToggleSideNavBar(!toggleSideNavBar);
  };
  const toggleSidebaronSmallScreen = () => {
    setToggleSideNavBarOnSmallScreen(!toggleSideNavBarOnSmallScreen);
  };
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  return (
    <div
    //   className={
    //     toggleSideNavBar ? "theme-orange" : "theme-orange layout-fullwidth"
    //   }
    >
      <div className="overlay" />
      <div id="wrapper">
        {/* <TopnavBar
          openPortal={props.openPortal}
          toggleSidebar={toggleSidebar}
          toggleSideNavBar={toggleSideNavBar}
          toggleSideNavBarOnSmallScreen={toggleSideNavBarOnSmallScreen}
          toggleSidebaronSmallScreen={toggleSidebaronSmallScreen}
        /> */}
        <SidenavBar
          toggleSidebar={toggleSideNavBarOnSmallScreen}
          toggleSideNavBar={toggleSidebaronSmallScreen}
          toggleSideNavBarOnSmallScreen={toggleSideNavBarOnSmallScreen}
          toggleSidebaronSmallScreen={toggleSidebaronSmallScreen}
        />
        <div id="main-content">
          <div className="container-fluid">
            <Suspense fallback={loading()}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}