import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
// 21205B
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
