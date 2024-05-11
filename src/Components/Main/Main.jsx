import React from "react";
import "./Main.css"
import Logo from "../../assets/Logo.gif"



const Main = () => {
    return(
    <main> 
        <div className="main-div ">
            <div className="main-left">
                <h1>DEFEND, DETECT, ​AND DECIMATE ​THREATS</h1>
                <p>At BlockGenesys, we understand the blood, sweat, and code ​that go into building your blockchain legacy. That's why our ​mission is crystal clear: to shield your digital assets from the ​ever-looming specter of cyber threats. Think of us as your ​trusty companions in the fight against the forces of ​darkness lurking in the digital shadows.</p>
            </div>
            <div className="main-right">
                <img src={Logo} alt="" width={350} height={350} />
            </div>
        </div>
        <div>

        </div>
    </main>    
    )
}

export default Main;