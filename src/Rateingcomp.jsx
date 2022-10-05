import React from "react";
import { Link } from "react-router-dom";
import svgstar from"./icon-star.svg";


const Rateingcomp = (props) => {
    const handlclick =(event)=>{
            let a = event.target.value;
            props.starSet(a);
    }
    return (
        <div className="cantainer">
            <img src={svgstar} className="svgstar" alt="star" />
            <div className="txtcont">
                <h1>How did we do?</h1>
                <p>
                    Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!
                </p>
                <div className="rate">
                    <button onClick={handlclick} className="star" value="1">1</button>
                    <button onClick={handlclick} className="star" value="2">2</button>
                    <button onClick={handlclick} className="star" value="3">3</button>
                    <button onClick={handlclick} className="star" value="4">4</button>
                    <button onClick={handlclick} className="star" value="5">5</button>
                </div>
                
                <Link className="submit" to="/rated">Submit</Link>
            </div>
        </div>
    );
}

export default Rateingcomp;