import Dashboard from "./components/Dashboard";
import Counter from "./components/counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/youtube-dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;