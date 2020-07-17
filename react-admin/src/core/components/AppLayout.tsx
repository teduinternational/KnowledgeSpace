import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";


const AppLayout = (props: any) => (
  <>
    <Header></Header>
    <div id="layoutSidenav">
      <SideBar></SideBar>
      <div id="layoutSidenav_content">
        {props.children}
      </div>
    </div>
  </>
);
export default AppLayout;
