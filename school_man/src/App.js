import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct imports
import "./App.css";

//import pages
import Home from "./pages/Home";

// import components
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Control from "./pages/Control";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        {/* Routes with sidebar without displayin navbar */}
        <Route path="/Control/*" element={<Layout><Control /></Layout>} />
        <Route path="/Control/Students" element={<Layout><Students /></Layout>} />
        <Route path="/Control/Teachers" element={<Layout><Teachers /></Layout>} />
        <Route path="/Control/Schedule" element={<Layout><Schedule /></Layout>} />

        {/* Routes without Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}
export default App;
