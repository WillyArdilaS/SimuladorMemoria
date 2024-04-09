import React, { Fragment, useEffect, useState } from "react"
import Header from "../components/Header"
import FeaturesTable from "../components/FeaturesTable"
import LogicAddressTable from "../components/Segmentation/LogicAddressTable"
import Performance from "../components/Segmentation/Performance"
import FilePanel from "../components/Segmentation/FilePanel"
import AddressTable from "../components/Segmentation/AddressTable"
import MemoryFiles from "../components/Segmentation/MemoryFiles"
import FilesInfo from '../data/FilesInfo.json';

const Segmentation  = () => {
  const memorySize = 16777246
  const offset = 262144;
  const [blockSizes, setBlockSizes] = useState([{id: 0, blockSize: 15728639}]);
  const [addressLimits, setAddressLimits] = useState([1048577])
  const [files, setFiles] = useState([]);
  const [activeFiles, setActiveFiles] = useState([]);
  const [filesGroup, setFilesGroup] = useState([]);

  useEffect(() => {
    const updatedFiles = FilesInfo.map(file => ({
      id: file.id,
      nombrePrograma: file.nombrePrograma,
      memoriaUsar: file.memoriaUsar,
      text: file.tamañoCodigo,
      data: file.tdatosInicializados,
      bss: file.tdatosSinIniciar,
      heap: 131072,
      stack: 65536,
      estado: false
    }));

    const emptyFiles = [...updatedFiles];
    while (emptyFiles.length < 16) {
        emptyFiles.push({
            id: '',
            nombrePrograma: '',
            text: 0,
            data: 0,
            bss: 0,
            heap: 0,
            stack: 0,
            estado: false
        });
    }

    setFiles(emptyFiles.slice(0, 16));
  }, []);

  useEffect(() => {
    const filesID = [];
    let filesGroupUpdated = [];

    activeFiles.map(file => {
        if(file !== null && file !== undefined) {
            if(!filesID.includes(file.id)) {
                filesID.push(file.id);
            }
        }
    })

    filesID.map((file, index) => {
      filesGroupUpdated[index] = activeFiles.filter(data => data.id == file)
    })

    setFilesGroup(filesGroupUpdated);
  }, [activeFiles]);

  return (
    <>
        <div>
          <Header/>

          <div className="fixed top-36 left-6 animate-fade-down animate-duration-1000">
            <FeaturesTable/>
          </div>

          <div className="fixed top-1/2 left-6 mt-4 w-full animate-fade-down animate-duration-1000">
            <LogicAddressTable />
          </div>

          <div className="fixed top-36 left-80 ml-36 w-full animate-fade-down animate-duration-1000">
            <Performance memorySize={memorySize} blockSizes={blockSizes} filesGroup={filesGroup}/>
          </div>

          <div className="fixed top-28 right-80 mr-24 animate-fade-down animate-duration-1000">
            {
              filesGroup.map((activeFile, index) => (
                <AddressTable activeFile={activeFile} addressLimits={addressLimits} addressIndex={index==0 ? 0 : filesGroup[index-1].length} />
              ))
            }
          </div>

          <div className="fixed top-28 right-16 animate-fade-down animate-duration-1000">
            <MemoryFiles offset={offset} blockSizes={blockSizes} setBlockSizes={setBlockSizes} addressLimits={addressLimits} setAddressLimits={setAddressLimits} 
            adjustment={"best"} files={files} setActiveFiles={setActiveFiles}/>
          </div>

          <div className="fixed -bottom-0 -left-1 w-full animate-fade-down animate-duration-1000">
            <FilePanel files={files} setFiles={setFiles}/>
          </div>
        </div>
    </>
  )
}

export default Segmentation 