import React, { Fragment, useEffect, useState } from "react"
import Header from "../components/Header"
import FeaturesTable from "../components/FeaturesTable"
import LogicAddressTable from "../components/Pagination/LogicAddressTable"
import Performance from "../components/Pagination/Performance"
import FilePanel from "../components/Pagination/FilePanel"
import AddressTable from "../components/Pagination/AddressTable"
import MemoryFiles from "../components/Pagination/MemoryFiles"
import FilesInfo from '../data/FilesInfo.json';

const Pagination  = () => {
  const memorySize = 16777246
  const offset = 65536;
  const [frames, setFrames] = useState([])
  const [blockSizes, setBlockSizes] = useState([]);
  const [addressLimits, setAddressLimits] = useState([]);
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

    const updatedFrames = []
    for(let i=0; i<16; i++) {
      updatedFrames.push({frame: i, pid: 0});
    }

    const emptyFrames = [...updatedFrames];
    while (emptyFrames.length < 255) {
      emptyFrames.push({
            frame: '',
            pid: -1,
      });
    }

    setFrames(emptyFrames.slice(0, 255));

    const updatedBlocks = []
    for(let i=0; i<16; i++) {
      updatedBlocks.push({id: 'SO', blockSize: 65536});
    }

    const emptyBlocks = [...updatedBlocks];
    while (emptyBlocks.length < 255) {
      emptyBlocks.push({
            id: '',
            blockSize: 65536,
      });
    } 
    setBlockSizes(emptyBlocks.slice(0, 255));

    const emptyaddressLimits = [...addressLimits];
    while (emptyaddressLimits.length < 255) {
      emptyaddressLimits.push(65536);
    }

    setAddressLimits(emptyaddressLimits.slice(0, 255));
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
          {/*
          <div className="fixed top-36 left-80 ml-36 w-full animate-fade-down animate-duration-1000">
            <Performance memorySize={memorySize} blockSizes={blockSizes} filesGroup={filesGroup}/>
          </div>

          
        */}
        <div className="fixed top-28 right-80 mr-24 animate-fade-down animate-duration-1000">
        {filesGroup.map((activeFile, index) => {
          if (activeFile.id !== '') {
            return (
              <AddressTable key={index} activeFile={activeFile} addressLimits={addressLimits} addressIndex={index === 0 ? 0 : filesGroup[index - 1].length} />
            );
          }
          return null;
        })}
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

export default Pagination 