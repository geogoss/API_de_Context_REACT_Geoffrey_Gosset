import React, { useContext } from 'react';
import "./BtnToggle.css"
import {ThemeContext} from '../../Context/ThemeContext'



export default function BtnToggle() {

    const {toggleTheme} = useContext(ThemeContext)

  return <div>
      <button 
      onClick={toggleTheme} 
      className='btnToggle'>Toggle</button>
  </div>;
}
