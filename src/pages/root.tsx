import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Root() {
    
    return (
        <>
        <Navbar/>
        <main id="main">
            <Outlet/>
        </main>
        <Footer/>
        </>
     );
}

export default Root;