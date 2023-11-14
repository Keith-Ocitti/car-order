"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import "./Navbar.css";

const NavbarComponents = () => {
  return (
    <div className="nav-bar">
      <nav>
        <ul className="nav-menu-items">
          {/* side bar menu items */}
          <div className="menu-items">
            <h1 className="car-report-title">Car Report</h1>
            <li className="nav-text">
              <Link href={"/"} className="a">
                {/* <span className='span'>|</span> */}
                <Image
                  className="icons"
                  src="/Dashboard.svg"
                  alt="NotificationLogo"
                  width={18}
                  height={18}
                />
                Dashboard
              </Link>
            </li>
            <li className="nav-text">
              <Link href={"/driver"} className="a">
                {/* <span className='span'>|</span> */}
                <Image
                  className="icons"
                  src="/Car.svg"
                  alt="NotificationLogo"
                  width={18}
                  height={18}
                />
                Drivers
              </Link>
            </li>
            <li className="nav-text">
              <Link href={"/booking"} className="a">
                {/* <span className='span'>|</span> */}
                <Image
                  className="icons"
                  src="/Group.svg"
                  alt="BookingLogo"
                  width={18}
                  height={18}
                />
                Bookings
              </Link>
            </li>
            <li className="nav-text">
              <Link href={"/notification"} className="a">
                {/* <span className='span'>|</span> */}
                <Image
                  className="icons"
                  src="/Bell.svg"
                  alt="NotificationLogo"
                  width={18}
                  height={18}
                />
                Notifications
              </Link>
            </li>
            <li className="nav-text">
              <Link href={"/set"} className="a">
                {/* <span className='span'>|</span> */}
                <Image
                  className="icons"
                  src="/Settings.svg"
                  alt="NotificationLogo"
                  width={18}
                  height={18}
                />
                Settings
              </Link>
            </li>
            {/* separator */}
            <div className="separator"></div>

            <div className="car-reports">
              <h3>Reports</h3>
            </div>

            <li className="nav-text">
              <Link href={"/payment"} className="a">
                {/* <span className='span'>|</span> */}
                <Image
                  className="icons"
                  src="/Payment.svg"
                  alt="NotificationLogo"
                  width={18}
                  height={18}
                />
                Payment Details
              </Link>
            </li>

            <li className="nav-text">
              <Link href={"/transaction"} className="a">
                {/* <span className='span'>|</span> */}
                <Image
                  className="icons"
                  src="/Transaction.svg"
                  alt="NotificationLogo"
                  width={18}
                  height={18}
                />
                Transactions
              </Link>
            </li>
            <li className="nav-text">
              <Link href={"/carreport"} className="a">
                {/* <span className='span'>|</span> */}
                <Image
                  className="icons"
                  src="/Group 3.svg"
                  alt="NotificationLogo"
                  width={18}
                  height={18}
                />
                Car Report
              </Link>
            </li>

            <li className="nav-text">
              <button className="logout-btn">
                <Image
                  className="icons"
                  src="/Logout.svg"
                  alt="NotificationLogo"
                  width={18}
                  height={18}
                />
                Log 0ut
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default function SideBar() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div className="main-container">
      {sidebar ? <NavbarComponents /> : ""}
      <div className="desktop-navbar">
        <NavbarComponents />
      </div>
      <Link href={" "} className="menu-bars">
        {sidebar ? (
          <AiOutlineClose
            onClick={() => setSidebar((prev) => !prev)}
            className="closeMenu"
          />
        ) : (
          <FaBars
            onClick={() => setSidebar((prev) => !prev)}
            className="openMenu"
          />
        )}
      </Link>

      {/* </IconContext.Provider> */}
    </div>
  );
}
