import { useEffect, useState } from "react"
import Header from "../components/Header"
import FeaturesTable from "../components/FeaturesTable"
import Performance from "../components/Fixed Size Static/Performance"
import FilePanel from "../components/Fixed Size Static/FilePanel"
import AddressTable from "../components/Fixed Size Static/AddressTable"
import MemoryTable from "../components/Fixed Size Static/MemoryTable"
import MemoryFiles from "../components/Fixed Size Static/MemoryFiles"
import FilesInfo from '../data/FilesInfo.json';

const FixedSizeStatic = () => {
  const memorySize = 16777246
  const blockSize = 1048576;
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

          <div className="fixed top-36 left-96 ml-48 w-full animate-fade-down animate-duration-1000">
            <Performance memorySize={memorySize} blockSize={blockSize} activeFiles={activeFiles}/>
          </div>

          <div className="fixed top-36 right-96 mr-8 animate-fade-down animate-duration-1000">
            <AddressTable activeFiles={activeFiles}/>
          </div>
          
          <div className="fixed top-36 right-40 mr-3.5 animate-fade-down animate-duration-1000" style={{marginTop: -1}}>
            <MemoryFiles blockSize={blockSize} files={files} setActiveFiles={setActiveFiles}/>
          </div>

          <div className="fixed top-28 right-11 mr-0.5 animate-fade-down animate-duration-1000">
            <MemoryTable blockSize={blockSize} />
          </div>

          <div className="fixed -bottom-0 -left-1 w-full animate-fade-down animate-duration-1000">
            <FilePanel blockSize={blockSize} files={files} setFiles={setFiles}/>
          </div>
        </div>
    </>
  )
}

export default FixedSizeStatic