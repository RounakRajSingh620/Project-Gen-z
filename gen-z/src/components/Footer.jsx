import React from 'react'
import './footer.css';
import facebook from "../assets/facebook.jpg";
import instagram from "../assets/instagram.jpg";
import pinterest from "../assets/pinterest.jpg";
import twitter from "../assets/twitter.jpg";

function Footer() {
  return (
    <>
    <div className='main'>
      <ul className="heading">SHOP
      <li className='listitems'>Ladies</li>
      <li className='listitems'>Men</li>
      <li className='listitems'>Kids</li>
      <li className='listitems'>Sports</li>
      <li className='listitems'>Customize</li>
      </ul>
      <ul className="heading">CORPORATE INFO
      <li className='listitems'>Carrerr at GENZ</li>
      <li className='listitems'>About GENZ group</li>
      <li className='listitems'>Sustainability GENZ Goup</li>
      <li className='listitems'>press</li>
      <li className='listitems'>Investor relations</li>
      <li className='listitems'>corporate governance</li>
      </ul>
      <ul className="heading">HELP
      <li className='listitems'>Customer Service</li>
      <li className='listitems'>My GENZ</li>
      <li className='listitems'>Find a store</li>
      <li className='listitems'>Legal & Privacy</li>
      <li className='listitems'>Contact</li>
      <li className='listitems'>Report a scam</li>
      <li className='listitems'>Cookie Notice</li>
      <li className='listitems'>Cookie Settings</li>
      </ul>

    </div>
      <div className='webimg'>
      <img className="webbimgg"src={facebook} alt="facebook" />
      <img className="webbimgg"src={instagram} alt="insta" />
      <img className="webbimgg"src={twitter} alt="twitter" />
      <img className="webbimgg"src={pinterest} alt="pinterest" />
      </div>
    </>
  )
}

export default Footer
