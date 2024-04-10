import { CiMenuKebab } from "react-icons/ci";
import { useRef } from "react";
import "./menu.css";

import { IoMdClose } from "react-icons/io";
const Nav1 = () => {
  const navRef = useRef(null);
  const closeRef = useRef(null);
  function revealSidebar() {
    navRef.current.classList.add("navreveal");
  }

  function hideSidebar() {
    navRef.current.classList.remove("navreveal");
  }

  // function menuToggle(){
  //   if(toggle === false){
  //       document.querySelector('ul').classList.add('reveal')
  //       toggle = true;
  //   }else{
  //       document.querySelector('ul').classList.remove('reveal')
  //       toggle = false
  //   }
  // }

  const whatToHappen = () => {
    window.location.replace("/contact");
  };
  return (
    <div className="parent">

      <nav ref={navRef}>
        <ul className="list">
          <li>
            <IoMdClose onClick={hideSidebar} ref={closeRef} className="mynav" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <div>
        <button onClick={whatToHappen} className="btn1">
          Let&apos;s Talk
        </button>
        <CiMenuKebab  onClick={revealSidebar} className="burger" />
      </div>
    </div>
  );
};

export default Nav1;
