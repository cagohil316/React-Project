import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./home.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import SignIn from "./components/signin";
import SignUp from "./components/signup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
