import { useEffect, useState } from "react"
import Header from "../components/Header"
import FeaturesTable from "../components/FeaturesTable"
import Performance from "../components/Performance"
import FilePanel from "../components/FilePanel"
import AddressTable from "../components/Fixed Size Static/AddressTable"
import MemoryTable from "../components/Fixed Size Static/MemoryTable"
import FilesInfo from '../data/FilesInfo.json';

const FixedSizeStatic = () => {
  const [files, setFiles] = useState([]);

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

          <div className="fixed top-36 left-96 ml-44 w-full animate-fade-down animate-duration-1000">
            <Performance/>
          </div>

          <div className="fixed top-36 right-96 mr-8 animate-fade-down animate-duration-1000">
            <AddressTable/>
          </div>

          <div className="fixed top-28 right-12 animate-fade-down animate-duration-1000">
            <MemoryTable files={files}/>
          </div>

          <div className="fixed -bottom-0 -left-1 w-full animate-fade-down animate-duration-1000">
            <FilePanel files={files} setFiles={setFiles}/>
          </div>
        </div>
    </>
  )
}

export default FixedSizeStatic