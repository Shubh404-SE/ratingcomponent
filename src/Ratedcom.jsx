import React from 'react'
import svglogo from "./illustration-thank-you.svg";

export default function Ratedcom(props) {
    return (
        <div className="cantainer">
            <img src={svglogo} className="svglogo" alt="svg logo" />
            <div className="txtcont">
                <p className='rating'>You selected {props.s} out of 5</p>
                <h1>Thank you!</h1>
                <p>
                    We appreciate you taking the time to give a rating. If you ever need more support,
                    don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    )
}
