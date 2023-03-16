import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/style.css";
import logo from "./assets/images/logo.svg";
import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home";
import Form from "./components/Form";
import AddForm from "./components/AddForm";

function App() {
  return (
    <>
      <Router>
        <nav class="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
          <img src={logo} />
        </nav>
        <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
          <Sidebar />
          <div class="lg:pl-[14rem]  mt-[5.8125rem]">
          
            {/* <Form/> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/job/:jobId" element={<Form formType="edit-job"/>} />
              <Route path="/create-job" element={<AddForm/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
