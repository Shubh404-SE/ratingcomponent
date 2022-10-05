import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Ratedcom from "./Ratedcom";
import Rateingcomp from "./Rateingcomp";

const App =()=>{
    const [star, setstar] = useState();
    return(
        <>
        <Routes>
        <Route exact path="/"   element={<Rateingcomp starSet={setstar} />}></Route>
        <Route exact path="/rated"  element={<Ratedcom s ={star} />}></Route>
        </Routes>
        </>
    );
}
export default App;