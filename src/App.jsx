
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from './components/utils/Loader';
import Index from "./pages/Index";
import Courts from "./pages/Courts";
import News from "./pages/News";
import Profile from "./pages/Profile";
import SideBar from "./components/SideBar/SideBar";

function App() {

  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/courts" element={<Courts />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/l" element={<Loader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
