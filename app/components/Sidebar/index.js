import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style.css'

export const Sidebar = () => {
  return (
    <div className={ style.sidebar }>
      <h3 className={ style.name }>John Smith</h3>
      <p className={ style.time }>Last active: {Math.floor((Math.random() * 10) + 1)} minutes ago.</p>
    </div>
  )
}

export default CSSModules(Sidebar, style)
