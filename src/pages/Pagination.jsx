import { useEffect, useState } from "react"
import Header from "../components/Header"
import FeaturesTable from "../components/FeaturesTable"
import Performance from "../components/Pagination/Performance"
import FilePanel from "../components/Pagination/FilePanel"
import AddressTable from "../components/Pagination/AddressTable"
import MemoryFiles from "../components/Pagination/MemoryFiles"
import FilesInfo from '../data/FilesInfo.json';
import LogicAddressTable from "../components/Pagination/LogicAddressTable"

const Pagination  = () => {
  const memorySize = 16777246
  const [blockSizes, setBlockSizes] = useState([15728639]);
  const [addressLimits, setAddressLimits] = useState([1048576])
  const [files, setFiles] = useState([]);
  const [activeFiles, setActiveFiles] = useState([]);

  useEffect(() => {
    const updatedFiles = FilesInfo.map(file => ({
      id: file.id,
      nombrePrograma: file.nombrePrograma,
      memoriaUsar: file.memoriaUsar,
      estado: false
    }));

    const emptyFiles = [...updatedFiles];
    while (emptyFiles.length < 16) {
        emptyFiles.push({
            id: '',
            nombrePrograma: '',
            memoriaUsar: 0,
            estado: false
        });
    }

    setFiles(emptyFiles.slice(0, 16));
  }, []);

  return (
    <>
        <div>
          <Header/>

          <div className="fixed top-36 left-10 animate-fade-down animate-duration-1000">
            <FeaturesTable/>
          </div>

          <div className="fixed top-1/2 left-10 mt-4 w-full animate-fade-down animate-duration-1000">
            <LogicAddressTable />
          </div>

          <div className="fixed top-36 left-80 ml-48 w-full animate-fade-down animate-duration-1000">
            <Performance memorySize={memorySize} blockSizes={blockSizes} activeFiles={activeFiles}/>
          </div>

          <div className="fixed top-36 right-96 mr-24 animate-fade-down animate-duration-1000">
            <AddressTable activeFiles={activeFiles} blockSizes={blockSizes} addressLimits={addressLimits}/>
          </div>

          <div className="fixed top-28 right-28 animate-fade-down animate-duration-1000">
            <MemoryFiles blockSizes={blockSizes} setBlockSizes={setBlockSizes} addressLimits={addressLimits} setAddressLimits={setAddressLimits} adjustment={"first"} 
            files={files} setActiveFiles={setActiveFiles}/>
          </div>

          <div className="fixed -bottom-0 -left-1 w-full animate-fade-down animate-duration-1000">
            <FilePanel files={files} setFiles={setFiles}/>
          </div>
        </div>
    </>
  )
}

export default Pagination 