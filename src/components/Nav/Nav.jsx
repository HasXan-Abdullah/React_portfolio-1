import React from 'react'
import Social from '../globle_compo/Social';
 
import "./Nav.css";
const NavChild = (props)=>{
  return (
    <div className="iconsTab">
    <ul>
      <li>
<a href="#">     
 <i class={props.iconName} aria-hidden="true"></i>
</a>
      </li>
    </ul>
  </div>
  );
}
const Nav = () => {
  return (
    <div className='navtab'>
       <NavChild iconName="fa fa-home"/>
       
       <NavChild iconName="fa fa-home"/>
       <NavChild iconName="fa-solid fa-user"/>
       <NavChild iconName="fa fa-home"/>
    </div>
  )
}

export default Nav