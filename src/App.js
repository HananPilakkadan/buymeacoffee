import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExploreCreators from "./Pages/ExploreCreators";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore-creators" element={<ExploreCreators />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
