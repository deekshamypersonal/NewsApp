import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import AllNews from "./components/AllNews";
import EveryThingCard from './components/EveryThingCard';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="">
      <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllNews />} />
          <Route path="/top-headlines/:category" element={<EveryThingCard />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
