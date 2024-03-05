import Header from "../components/Header"
import FeaturesTable from "../components/FeaturesTable"
import Performance from "../components/Performance"
import FilePanel from "../components/FilePanel"
import AddressTable from "../components/Variable Size Static/AddressTable"
import MemoryTable from "../components/Variable Size Static/MemoryTable"
import AdjustmentSelector from "../components/AdjustmentSelector"

const VariableSizeStatic  = () => {
  return (
    <>
        <div>
          <Header/>

          <div className="fixed top-36 left-10 animate-fade-down animate-duration-1000">
            <FeaturesTable/>
          </div>

          <div className="fixed top-36 left-80 ml-48 w-full animate-fade-down animate-duration-1000">
            <Performance/>
          </div>

          <div className="fixed top-1/2 left-10 mt-4 w-full animate-fade-down animate-duration-1000">
            <AdjustmentSelector/>
          </div>

          <div className="fixed top-36 right-96 mr-4 animate-fade-down animate-duration-1000">
            <AddressTable/>
          </div>

          <div className="fixed top-28 right-12 animate-fade-down animate-duration-1000">
            <MemoryTable/>
          </div>

          <div className="fixed -bottom-0 -left-1 w-full animate-fade-down animate-duration-1000">
            <FilePanel/>
          </div>
        </div>
    </>
  )
}

export default VariableSizeStatic 