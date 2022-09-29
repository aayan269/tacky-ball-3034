import { Route, Routes } from "react-router-dom";
import Business from "./Business";
import Entertainment from "./Entertainment";
import Health from "./Health";
import Nation from "./Home";
import Science from "./Science";
import Sports from "./Sports";
import Subscribe from "./subscribe";
import Technology from "./Technology";


export default function AllRoutes(){

    return(
        <Routes>
            <Route path="/"  element={<Nation/>} />
            <Route path="/business"  element={<Business />} />
            <Route path="/entertainment"  element={<Entertainment />} />
            <Route path="/health"  element={<Health/>} />
            <Route path="/science"  element={<Science/>} />
            <Route path="/sports"  element={<Sports/>} />
            <Route path="/technology"  element={<Technology/>} />
            <Route path="/subscribe"  element={<Subscribe/>} />
        </Routes>
    )
}