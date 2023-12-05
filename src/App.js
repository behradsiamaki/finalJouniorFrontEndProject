import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Pages/Home";
import Item from "./components/Pages/Item";
import Search from "./components/Pages/Search";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Home />} index />
          <Route element={<Item />} path="item/:id" />
          <Route element={<Search />} path="search" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
