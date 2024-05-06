import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, RegisterPage, LoginPage } from "./pages";
import Nav from "./components/Nav";
import CreateListingPage from "./pages/CreateListingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-listing" element={<CreateListingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
