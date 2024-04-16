import { Outlet } from "react-router-dom";
import Nav from './Home/Nav';
import Footer from "./Home/Footer";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
            
            
        </div>
    );
};

export default Root;