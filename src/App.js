import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Foodarea from "./Components/Foodarea";
import Footer from "./Components/Footer";




function App() {
  
  return (
    <div >
      <Router>
        <Navbar />
        <div className=" h-screen w-full bg-gradient-to-b from-black via-gray-800 to to-gray-700">{/*container for remaining elements */}

          <Routes>
            <Route path="/" exact element={<Foodarea />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<Signup />} />

          </Routes>
          <Footer />

        </div>
      </Router>
    </div>
  );
}

export default App;
