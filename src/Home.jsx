import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logo from "./assets/logo1.png";

export default function Home() {
  return (
    <>
      <div className="container">
        
          <div className="logo">
            <img src={logo} alt="logo" />
            <h2>Emerald</h2>
          </div>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact us</li>
          </ul>

          <div className="icon">
             <FaUser />
             <FaShoppingCart/>
          </div>
        </div>

    </>
  );
}
