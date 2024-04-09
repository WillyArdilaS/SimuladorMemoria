import { BrowserRouter, Routes, Route } from "react-router-dom"
import FixedSizeStatic from "./pages/FixedSizeStatic"
import VariableSizeStatic from "./pages/VariableSizeStatic"
import DynamicNoCompaction from "./pages/DynamicNoCompaction"
import Segmentation from "./pages/Segmentation"
import Pagination from "./pages/Pagination"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<FixedSizeStatic/>}/> 
        <Route path="/estaticas-fijo" element={<FixedSizeStatic/>}/> 
        <Route path="/estaticas-variable" element={<VariableSizeStatic/>}/> 
        <Route path="/dinamicas-sin-compactacion" element={<DynamicNoCompaction/>}/> 
        <Route path="/dinamicas-con-compactacion" element={<DynamicNoCompaction/>}/> 
        <Route path="/segmentacion" element={<Segmentation/>}/> 
        <Route path="/paginacion" element={<Pagination/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App