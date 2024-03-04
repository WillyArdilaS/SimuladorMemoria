import { BrowserRouter, Routes, Route } from "react-router-dom"
import FixedSizeStatic from "./pages/FixedSizeStatic"
import VariableSizeStatic from "./pages/VariableSizeStatic"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<FixedSizeStatic/>}/> 
        <Route path="/estaticas-fijo" element={<FixedSizeStatic/>}/> 
        <Route path="/estaticas-variable" element={<VariableSizeStatic/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App