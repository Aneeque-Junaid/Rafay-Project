import React from 'react'
import "./OurProcess.css"
import Down from "../../assets/Down.gif"

const OurProcess = () => {
  return (
    <div id='our-process-section'>
            <h1>
                Our Auditing Process
            </h1>
            <p>
                Our team of expert auditors employs a meticulous and comprehensive approach to ​smart contract auditing. We combine industry best practices with cutting-edge ​technologies to identify potential vulnerabilities and ensure the integrity of your smart ​contracts.
            </p>
            <img src={Down} alt="" width={100} height={100} />
    </div>
)
}

export default OurProcess