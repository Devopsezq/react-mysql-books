import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./pages/update";
import Add from "./pages/add";
import Books from "./pages/books";
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
