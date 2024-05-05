import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, RegisterPage, LoginPage } from "./pages";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
