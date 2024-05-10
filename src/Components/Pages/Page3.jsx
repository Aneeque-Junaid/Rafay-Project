import React from 'react'
import Logo from "../../assets/03.svg"

import "./Pages.css"

const Page2 = () => {
  return (
    <div id='page-section'>
        <div className='page-left'>
            <p>03</p>
            <h1>
                Detailed <br /> Reporting
            </h1>
            <p>
                Upon completion of the audit, we provide you with a ​detailed report summarizing our findings.
            </p>
            <p>
                This includes identified vulnerabilities, their severity ​levels, and actionable recommendations for ​remediation. Our transparent reporting process ​empowers you to make informed decisions about ​enhancing the security and reliability of your smart ​contracts, safeguarding your digital assets and ​bolstering stakeholder trust.
            </p>
        </div>
        <div className='page-right'>
            <img src={Logo} alt="" width={300} height={300} />
        </div> 
    </div>
  )
}

export default Page2;