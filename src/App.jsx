import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/ContactUs";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
