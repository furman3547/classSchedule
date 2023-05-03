import React from 'react';

const Header= ({handleToggleDarkMode })=> {
    return(
        <div class="Header">
            <h1>Class Dashboard</h1> 
            <h2> Notes </h2>
            <h2></h2>
            <button onClick={()=> handleToggleDarkMode((previousDarkmode)=>!previousDarkmode)}
            className="Toggle">Toggle Theme</button>

        </div>
    )
}

export default Header;