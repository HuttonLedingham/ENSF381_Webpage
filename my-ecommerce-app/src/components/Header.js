import React from 'react';


function Header(){
return(
    <div>
        <div className='headerContent'>        
            <img src="/images/logo.png" alt="logo" width={75}/>
            <p >E-Shoppe</p>
        </div>
        <p></p>
        <div className='links'>
            <a href='/' style={{alignItems:"center"}}>Home</a>
            <a href='/Productpage' style={{alignItems:"center"}}>Products</a>
            <a href='/Loginpage' style={{float:"right"}}>Login</a>
        </div>
    </div>
);
}

export default Header;