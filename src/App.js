import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import ReviewMessage from "./pages/ReviewMessage/ReviewMessage";
import News from "./pages/News/News";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/review-message" exact element={<ReviewMessage />} />
          <Route path="/news" exact element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
