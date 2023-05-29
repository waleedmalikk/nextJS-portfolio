import React from 'react'
import sidebarStyles from "../styles/sidebar.module.css"
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className={sidebarStyles.container}>
        <Image className={sidebarStyles.profile_pic} src="/profile_pic.jpg" alt="Profile Picture" width={150} height={150} />
        <h3>Lorem ipsum</h3>
        <div > 
            <ul className={sidebarStyles.verticalList}>
                <li>Home</li>
                <li>About Me</li>
                <li>What I Do</li>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>f</li>
                <li>s</li>
                <li>g</li>
                <li>l</li>

            </ul>
        </div>
    </div>
  )
}

export default Sidebar