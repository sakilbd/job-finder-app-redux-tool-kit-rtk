import "./assets/styles/style.css";
import logo from './assets/images/logo.svg'
import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home";
import Form from "./components/Form";

function App() {
  return (
    <>
      <nav class="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
        <img src={logo} />
      </nav>
      <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
       <Sidebar/>
        <div class="lg:pl-[14rem]  mt-[5.8125rem]">
          <Home/>
          {/* <Form/> */}
        </div>
      </div>
    </>
  );
}

export default App;
