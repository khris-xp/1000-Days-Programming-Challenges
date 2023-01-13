import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import List from "./list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
