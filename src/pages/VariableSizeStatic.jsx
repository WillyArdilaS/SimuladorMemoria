import { useEffect, useState } from "react"
import Draggable from "react-draggable"
import Header from "../components/Header"
import FeaturesTable from "../components/FeaturesTable"
import Performance from "../components/Variable Size Static/Performance"
import FilePanel from "../components/Variable Size Static/FilePanel"
import AddressTable from "../components/Variable Size Static/AddressTable"
import MemoryTable from "../components/Variable Size Static/MemoryTable"
import MemoryFiles from "../components/Variable Size Static/MemoryFiles"
import FilesInfo from '../data/FilesInfo.json';

const VariableSizeStatic  = () => {
  const memorySize = 16777246
  const blockSizes = [4194304, 4194304, 2097152, 2097152, 1048576, 1048576, 524288, 524288];
  const blockSizesReverse = [524288, 524288, 1048576, 1048576, 2097152, 2097152, 4194304, 4194304];
  const [adjustment, setAdjustment] = useState('first');
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

          <div className="fixed top-36 left-80 ml-48 w-full animate-fade-down animate-duration-1000">
            <Performance memorySize={memorySize} blockSizesReverse={blockSizesReverse} activeFiles={activeFiles}/>
          </div>

          <div className="fixed top-1/2 left-10 mt-4 w-full animate-fade-down animate-duration-1000">
            <Draggable>
              <select className="w-1/6 py-1 px-2 bg-white border-2 border-darkGray shadow-lg" onChange={(e) => setAdjustment(e.target.value)}>
                  <option value="first"> Primer ajuste </option>
                  <option value="best"> Mejor ajuste </option>
                  <option value="worst"> Peor ajuste </option>
              </select>
            </Draggable>
          </div>

          <div className="fixed top-36 right-96 mr-4 animate-fade-down animate-duration-1000">
            <AddressTable activeFiles={activeFiles}/>
          </div>

          <div className="fixed top-36 right-40 mr-2 animate-fade-down animate-duration-1000" style={{marginTop: -1}}>
            <MemoryFiles blockSizes={blockSizes} adjustment={adjustment} files={files} setActiveFiles={setActiveFiles}/>
          </div>

          <div className="fixed top-28 right-11 mr-0.5 animate-fade-down animate-duration-1000">
            <MemoryTable blockSizes={blockSizes}/>
          </div>

          <div className="fixed -bottom-0 -left-1 w-full animate-fade-down animate-duration-1000">
            <FilePanel files={files} setFiles={setFiles}/>
          </div>
        </div>
    </>
  )
}

export default VariableSizeStatic 