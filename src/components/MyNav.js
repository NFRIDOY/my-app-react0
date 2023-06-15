import React from 'react'
import Navbar from './Navbar'

export default function MyNav() {
    return (
        <>
            <nav>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </nav>
            <div className='container d-flex justify-content-between'>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor saepe laudantium, dolores ducimus itaque molestiae est molestias modi voluptas voluptate! Eius nisi ea repellat, totam dignissimos ullam maxime quas accusamus?
                </p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2r4l0mgWEz6eUclXQI8q3ChgGr9UgPyd6K7qbDiFGCg&s" alt="" />
            </div>
        </>
    )
}
