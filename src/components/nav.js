import React from 'react';

export default function nav() {
    return (
        <div className='navbar'>
            <div className="logo">
                <h2>MY WEBSITE</h2>
            </div>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT US</a></li>
                <li><a href="/">BLOGS</a></li>
                <li><a href="/">CONTACT US</a></li>
            </ul>
            <button>DOWNLOAD NOW</button>
        </div>
        
    )
}
