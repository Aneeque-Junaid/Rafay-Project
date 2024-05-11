import React from 'react'
import Logo from "../../assets/01.svg"
import "./Pages.css"

const Page1 = React.forwardRef((props, ref) => 
    <div className='page-section' data-scroll-to="page1" ref={ref}>
        <div className='page-left' id='page1'>
            <p>01</p>
            <h1>
                Initial ​Assessment
            </h1>
            <p>
                We begin by understanding your project goals, ​architecture, and smart contract specifications. This ​allows us to tailor our auditing approach to your specific ​needs, ensuring a thorough evaluation of your smart ​contracts.
            </p>
            <p>
                Our team conducts a deep dive into your code to ​identify potential vulnerabilities and areas for ​improvement. By gaining a comprehensive ​understanding of your project's intricacies, we can ​develop a customized auditing strategy that effectively ​addresses your unique requirements.
            </p>
        </div>
        <div className='page-right'>
            <img src={Logo} alt="" width={300} height={300} />
        </div> 
    </div>
)

export default Page1;