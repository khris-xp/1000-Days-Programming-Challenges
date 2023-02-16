import Navbar from './components/Navbar'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App