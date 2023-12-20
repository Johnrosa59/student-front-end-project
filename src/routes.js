import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home/index"
import Students from "./containers/Students/index"

function MyRoutes(){

    return(
        <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/students" element={<Students />} />
                    </Routes>
        </Router>
    )

}


export default MyRoutes