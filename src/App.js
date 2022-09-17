import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import NotFound from "./pages/Shared/NotFound/NotFound";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/service/:serviceId" element={<ServiceDetail/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

//module 60.5 will start in shaa allah .