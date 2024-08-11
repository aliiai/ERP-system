import "./Dashboard.scss";
import { FaSitemap } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { Route, Routes, Link , NavLink } from "react-router-dom";
import Purchase from "../purchase/Purchase";
import imageUser from "../../images/cover-sidebar-user.jpg";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import PurchaseDetails from "../../components/purchaseDetails/PurchaseDetails";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { MdInventory2 } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import DashboardDetails from "../../components/dashboardDetails/DashboardDetails";
import Invoices from "../../components/invoices/Invoices";
import Inventory from "../../components/inventory/Inventory";
import Accounting from "../../components/accounting/Accounting";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// import { Routes, Route } from 'react-router-dom';
export default function Dashboard() {
  // function SearchBox() {
  const [sidbar , setSidbar] = useState(true)
  const [sidbarPhone , setSidbarPhone] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleMouseOut = (event) => {
    event.target.value = "";
    event.target.blur();
  };
  const menuIcon = () => {
  
    setSidbar(!sidbar)
 
  };
  const menuIconPhone = () => {
  
    setSidbarPhone(!sidbarPhone)
 
  };
  // };
 
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() =>{
    handleResize()
  },[])
  window.addEventListener("resize", handleResize);



  return (
    <>
      <div className="container-dashboard">
        
        <div className="container-header">
          {/* <img src={imageUser} alt="" className="logo-image"/> */}
          <h1 className="logo-image">LOGO</h1>
          <div className="info-user-and-search">
            <div className="container-search-header">
            <div className="box">
              <form name="search">
                <input
                  type="text"
                  className="input"
                  name="txt"
                  onMouseOut={handleMouseOut}
                />
              </form>
              <IoSearch className="icon-search-header" />
            </div>
            </div> 
            <div className="container-user-info-header">
              <img src={imageUser} alt="" className="image-user-header"/>
              <h1 className="title-user-header">ali elwakeil</h1>
            </div>
          </div>
        </div>
        {windowWidth > 767 ?  <div className={`${sidbar ? 'container-sidbar' : 'container-sidbar container-sidbar-icon'}`}>
          <div className={`${sidbar ? 'container-sidbar-control' : 'container-sidbar-control container-sidbar-control-icon'}`} onClick={() => menuIcon()}>
            {sidbar && <MdOutlineKeyboardDoubleArrowLeft className="icon-arrow-sidbar"/>}
            {!sidbar && <MdOutlineKeyboardDoubleArrowRight className="icon-arrow-sidbar"/>}
          </div>
          {sidbar && <div className="container-info-user-sidbar">
            <div className="filter-container-info-user-sidbar">
              <img src={imageUser} alt="" className="image-user-sidbar" />
              <div className="container-details-user">
                <h1 className="user-name">ali</h1>
                <p className="user-detail">ahmed ali mohamed</p>
                <MdKeyboardArrowRight className="icon-to-user-info" />
              </div>
            </div>
          </div>}



          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`} style={{marginTop: '2rem'}}>
          <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="" >
          <FaSitemap className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
            </NavLink>
          {/* <FaSitemap className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} /> */}
            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="">
            <FaSitemap className={"icon-tap-title"} />
              Dashboard
            </NavLink>
          </div>



          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
          <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="purchase">
          <BiSolidPurchaseTag className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
            </NavLink>

            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="purchase">
            <BiSolidPurchaseTag className="icon-tap-title" />
              Purchase
            </NavLink>
          </div>



          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
          <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="invoices">
          <FaFileInvoiceDollar className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
            </NavLink>
          {/* <FaFileInvoiceDollar className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} /> */}
            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="invoices">
            <FaFileInvoiceDollar className="icon-tap-title" />
            Invoicing and Sales
            </NavLink>
          </div>



          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
          <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="inventory">
          <MdInventory2 className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
            </NavLink>
          {/* <MdInventory2 className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} /> */}
            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="inventory">
            <MdInventory2 className="icon-tap-title" />
            Inventory
            </NavLink>
          </div>



          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
          <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="accounting">
          <MdManageAccounts className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
            </NavLink>
          {/* <MdManageAccounts className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} /> */}
            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="accounting">
            <MdManageAccounts className="icon-tap-title" />
            Accounting
            </NavLink>
          </div>



          {/* <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
          <MdManageAccounts className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
            <Link className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="purchase">
            <MdManageAccounts className="icon-tap-title" />
            Access Rights and Customization
            </Link>
          </div>




          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
          <MdManageAccounts className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
            <Link className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="purchase">
            <MdManageAccounts className="icon-tap-title" />
             Cloud Server Setup
            </Link>
          </div>




          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
          <MdManageAccounts className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
            <Link className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="purchase">
            <MdManageAccounts className="icon-tap-title" />
             eBay REST API Integration
            </Link>
          </div> */}



        </div> : null}




        {windowWidth <= 767 ? 
        <div className={`${!sidbarPhone ? 'container-sidbar-phone-a' : 'container-sidbar-phone-a container-sidbar-phone-a-icon'}`}>
        <div className={`${!sidbarPhone ? 'container-sidbar-control':'container-sidbar-control-icon'}`} onClick={() => menuIconPhone()}>
            {sidbarPhone && <MdOutlineKeyboardDoubleArrowLeft className="icon-arrow-sidbar"/>}
            {!sidbarPhone && <MdOutlineKeyboardDoubleArrowRight className="icon-arrow-sidbar"/>}
          </div>
          <div className="container-info-user-sidbar">
            <div className="filter-container-info-user-sidbar">
              <img src={imageUser} alt="" className="image-user-sidbar" />
              <div className="container-details-user">
                <h1 className="user-name">ali</h1>
                <p className="user-detail">ahmed ali mohamed</p>
                <MdKeyboardArrowRight className="icon-to-user-info" />
              </div>
            </div>
          </div>
          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`} style={{marginTop: '2rem'}} onClick={()=>menuIconPhone()}>
          <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="" >
          <FaSitemap className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
            </NavLink>
          {/* <FaSitemap className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} /> */}
            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="">
            <FaSitemap className={"icon-tap-title"} />
              Dashboard
            </NavLink>
          </div>



          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`} onClick={()=>menuIconPhone()}>
          <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="purchase">
          <BiSolidPurchaseTag className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
            </NavLink>

            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="purchase">
            <BiSolidPurchaseTag className="icon-tap-title" />
              Purchase
            </NavLink>
          </div>



          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}  onClick={()=>menuIconPhone()}>
          <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="invoices">
          <FaFileInvoiceDollar className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
            </NavLink>
          {/* <FaFileInvoiceDollar className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} /> */}
            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="invoices">
            <FaFileInvoiceDollar className="icon-tap-title" />
            Invoicing and Sales
            </NavLink>
          </div>



          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`} onClick={()=>menuIconPhone()}>
          <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="inventory">
          <MdInventory2 className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
            </NavLink>
          {/* <MdInventory2 className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} /> */}
            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="inventory">
            <MdInventory2 className="icon-tap-title" />
            Inventory
            </NavLink>
          </div>



          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`} onClick={()=>menuIconPhone()}>
          <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="accounting">
          <MdManageAccounts className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
            </NavLink>
          {/* <MdManageAccounts className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} /> */}
            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="accounting">
            <MdManageAccounts className="icon-tap-title" />
            Accounting
            </NavLink>
          </div>
        </div>
        // //  <div className={`${sidbar ? 'container-sidbar-phone' : 'container-sidbar-phone container-sidbar-phone-icon'}`}>
        // //   <div className={`${sidbar ? 'container-sidbar-control' : 'container-sidbar-control container-sidbar-control-icon'}`} onClick={() => menuIcon()}>
        // //     {sidbar && <MdOutlineKeyboardDoubleArrowLeft className="icon-arrow-sidbar"/>}
        // //     {!sidbar && <MdOutlineKeyboardDoubleArrowRight className="icon-arrow-sidbar"/>}
        // //   </div>
        //   {/* {sidbar && 
        //   <div className="container-info-user-sidbar">
        //     <div className="filter-container-info-user-sidbar">
        //       <img src={imageUser} alt="" className="image-user-sidbar" />
        //       <div className="container-details-user">
        //         <h1 className="user-name">ali</h1>
        //         <p className="user-detail">ahmed ali mohamed</p>
        //         <MdKeyboardArrowRight className="icon-to-user-info" />
        //       </div>
        //     </div>
        //   </div>
        //   } */}



        //   {/* <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`} style={{marginTop: '2rem'}}>
        //   <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="" >
        //   <FaSitemap className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
        //     </NavLink>
        //     <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="">
        //     <FaSitemap className={"icon-tap-title"} />
        //       Dashboard
        //     </NavLink>
        //   </div>



        //   <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
        //   <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="purchase">
        //   <BiSolidPurchaseTag className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
        //     </NavLink>

        //     <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="purchase">
        //     <BiSolidPurchaseTag className="icon-tap-title" />
        //       Purchase
        //     </NavLink>
        //   </div>



        //   <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
        //   <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="invoices">
        //   <FaFileInvoiceDollar className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
        //     </NavLink>
        //     <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="invoices">
        //     <FaFileInvoiceDollar className="icon-tap-title" />
        //     Invoicing and Sales
        //     </NavLink>
        //   </div>



        //   <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
        //   <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="inventory">
        //   <MdInventory2 className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
        //     </NavLink>
        //     <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="inventory">
        //     <MdInventory2 className="icon-tap-title" />
        //     Inventory
        //     </NavLink>
        //   </div>



        //   <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
        //   <NavLink className={` ${sidbar ? 'title-tap-icon sid-icon' : 'title-tap-icon'}`} to="accounting">
        //   <MdManageAccounts className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
        //     </NavLink>
        //     <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="accounting">
        //     <MdManageAccounts className="icon-tap-title" />
        //     Accounting
        //     </NavLink>
        //   </div> */}



        //   {/* <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
        //   <MdManageAccounts className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
        //     <Link className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="purchase">
        //     <MdManageAccounts className="icon-tap-title" />
        //     Access Rights and Customization
        //     </Link>
        //   </div>




        //   <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
        //   <MdManageAccounts className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
        //     <Link className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="purchase">
        //     <MdManageAccounts className="icon-tap-title" />
        //      Cloud Server Setup
        //     </Link>
        //   </div>




        //   <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
        //   <MdManageAccounts className={`${sidbar ? 'icon-tap-icon' : 'icon-tap-icon icon-tap-title-icon'}`} />
        //     <Link className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="purchase">
        //     <MdManageAccounts className="icon-tap-title" />
        //      eBay REST API Integration
        //     </Link>
        //   </div> */}



        // // </div> 
        : null}



















        {/* {windowWidth <= 767 ? 
        <div className={`${sidbarPhone ? 'container-sidbar' : 'container-sidbar container-sidbar-icon'}`}>
          <div className={`${sidbarPhone ? 'container-sidbar-control' : 'container-sidbar-control container-sidbar-control-icon'}`} onClick={() => menuIconPhone()}>
            {sidbarPhone && <MdOutlineKeyboardDoubleArrowLeft className="icon-arrow-sidbar" onClick={() => menuIconPhone()}/>}
            {!sidbarPhone && <MdOutlineKeyboardDoubleArrowRight className="icon-arrow-sidbar" onClick={() => menuIconPhone()}/>}
          </div>


          {sidbar && <div className="container-info-user-sidbar">
            <div className="filter-container-info-user-sidbar">
              <img src={imageUser} alt="" className="image-user-sidbar" />
              <div className="container-details-user">
                <h1 className="user-name">ali</h1>
                <p className="user-detail">ahmed ali mohamed</p>
                <MdKeyboardArrowRight className="icon-to-user-info" />
              </div>
            </div>
          </div>}
          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`} style={{marginTop: '2rem'}}>
            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="">
            <FaSitemap className={"icon-tap-title"} />
              Dashboard
            </NavLink>
          </div>

          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="purchase">
            <BiSolidPurchaseTag className="icon-tap-title" />
              Purchase
            </NavLink>
          </div>

          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="invoices">
            <FaFileInvoiceDollar className="icon-tap-title" />
            Invoicing and Sales
            </NavLink>
          </div>

          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="inventory">
            <MdInventory2 className="icon-tap-title" />
            Inventory
            </NavLink>
          </div>

          <div className={`${sidbar ? 'container-tab' : 'container-tab container-tab-icon'}`}>
            <NavLink className={` ${sidbar ? 'title-tap' : 'title-tap sid-icon'}`} to="accounting">
            <MdManageAccounts className="icon-tap-title" />
            Accounting
            </NavLink>
          </div>
        </div> 
        : null} */}
       




        <div className={`${sidbar ? 'container-body-dashboard' : 'container-body-dashboard container-body-dashboard-icon'}`}>
          {/* <Purchase/> */}
          <Routes>
            <Route path="" element={<DashboardDetails/>} />
            <Route path="purchase" element={<Purchase />} />        
            <Route path="invoices" element={<Invoices/>} />        
            <Route path="inventory" element={<Inventory/>} />        
            <Route path="accounting" element={<Accounting/>} />        
            {/* <Route path="purchase" element={<Purchase/>} /> */}
            <Route path="/purchase/:id" element={<PurchaseDetails/>} /> 
          </Routes>
        </div>
      </div>
    </>
  );
}
