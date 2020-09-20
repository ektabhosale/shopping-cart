import React from 'react';
import './Sidebar.css'

function Sidebar() {

    return (
        <>
            <div class="sidebar">
                <a  href="/">Dresses</a>
                <a href="/shoes">Footwear</a>
                <a href="/jewellery">Jewellery</a>
                {/* <a href="/watches">Other</a> */}
            </div>
        </>
    )
}


export default Sidebar;