import "./App.css";
import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searched from "./Searched";
import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/isbn" element={<Main />} />
          <Route path="/:bookIsbn" element={<Searched />} />
          <Route path="/" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);