import React from "react";
import bg from '../assets/bg.jpg';


function Background(
    {children} : {children : React.ReactNode}
){
    return(
        <div 
            className="h-screen w-full overflow-y-auto" 
            style={{background: `no-repeat url(${bg})`, backgroundSize: 'cover'}}>
            {children}
        </div>
    )
}

export default Background;