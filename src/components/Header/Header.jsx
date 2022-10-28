import React from 'react'
import Headings from '../globle_compo/Headings'
import './Header.css'
import pic from "../assets/hero.jpg";
 
import CV from "../assets/Hassan Abdullah(Resume) (1).pdf"
import Button from '../globle_compo/Button';
import Social from '../globle_compo/Social';
const Header = () => {
  return (
    <section id='header'>
      <div className="header-div">
      <Headings headings="hello world" span="Lets start" />
      </div>
      <div className="imageDiv">
        <img className='headerImage' src={pic}/>
      </div>
       <div className="social-iconsL">
       <Social href="#" iconName="fa fa-linkedin-square"/>
       <Social href="#" iconName="fa fa-github"/>
       <Social href="#" iconName="fa fa-facebook"/>       
       </div>
         <div className="social-iconsR">
        
         <Social href="#" iconName="fa fa-linkedin-square"/>
       </div>
      
      
    </section>
  )
}

export default Header