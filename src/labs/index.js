import Assignment6 from "./a6";
import Assignment7 from "./a7";
import Nav from "../nav";
import {Route, Routes} from "react-router";

function Labs() {
    return(
        <div>
            <Nav/>
            <Routes>
                <Route index element={<Assignment6/>}/>
                <Route exact path="/a7" element={<Assignment7/>}/>
            </Routes>
        </div>
    );
}
export default Labs;
