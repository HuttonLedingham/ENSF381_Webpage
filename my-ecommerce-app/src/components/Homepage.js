import React from 'react';


function Homepage(){
return(

    <header>
        <div className='headerContent'>        
        <img src="/images/logo.png" alt="logo" width={75}/>
        <p >Company Name</p>
        </div>
        <p></p>
        <div className='links'>
            <a href='/' style={{alignItems:"center"}}>Home</a>
            <a href='/Productpage' style={{alignItems:"center"}}>Products</a>
            <a href='/Loginpage' style={{float:"right"}}>Login</a>
        </div>
    </header>

);
}

export default Homepage;