import Header from "../components/Header"
import FeaturesTable from "../components/FeaturesTable"
import Performance from "../components/Performance"
import FilePanel from "../components/FilePanel"
import AddressTable from "../components/Fixed Size Static/AddressTable"
import MemoryTable from "../components/Fixed Size Static/MemoryTable"

const FixedSizeStatic = () => {
  return (
    <>
        <div>
          <Header/>

          <div className="fixed top-32 left-10 animate-fade-down animate-duration-1000">
            <FeaturesTable/>
          </div>

          <div className="fixed top-32 left-96 ml-44 w-full animate-fade-down animate-duration-1000">
            <Performance/>
          </div>

          <div className="fixed top-32 right-96 mr-8 animate-fade-down animate-duration-1000">
            <AddressTable/>
          </div>

          <div className="fixed top-32 right-12 animate-fade-down animate-duration-1000">
            <MemoryTable/>
          </div>

          <div className="fixed -bottom-0 -left-1 w-full animate-fade-down animate-duration-1000">
            <FilePanel/>
          </div>
        </div>
    </>
  )
}

export default FixedSizeStatic