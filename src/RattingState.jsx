// import React from "react";
import Rattingcontext from "./RattingContext";

const RattingState=(props)=>{

    const state = {
        "name": "shubham",
        "class": "10"
    }
    return(
        <Rattingcontext.provider value={state}>
            {props.children}
        </Rattingcontext.provider>
    );
}

export default RattingState;