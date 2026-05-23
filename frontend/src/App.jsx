import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Faculty from "./pages/Faculty";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";

function App() {
  return (
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/leave" element={<Leave />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
