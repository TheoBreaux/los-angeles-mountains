import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/climb" element={<Climb/>}/>
     </Routes>
    </>
  );
};

export default App;
