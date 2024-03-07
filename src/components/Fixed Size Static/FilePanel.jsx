import { useState } from 'react';
import Draggable from 'react-draggable';
import FilesInfo from '../../data/FilesInfo.json';
import fileIcon from '../../assets/File Icon.jpg'
import FileDetails from './FileDetails';
import CreateFileForm from '../CreateFileForm';

const FilePanel = ({blockSize, files, setFiles}) => {
    const [actualFile, setActualFile] = useState();
    const [showDetails, setShowDetails] = useState(false);
    const [showCreateForm, setShowCreateForm] = useState(false)
    
    const handleShowDetails = (file) => {
        setActualFile(file);
        setShowDetails(true);
    }

    return (
        <Draggable>
            {(showDetails == false && showCreateForm == false) ? (
                <section>
                    <article className="flex w-1/2 overflow-x-auto bg-white shadow-lg border-2 border-darkGray">
                        <section className="flex p-4">
                            {FilesInfo.map((file) => (
                                <article key={file.id} className="w-24">
                                    <button className='hover:scale-105' onClick={() => handleShowDetails(file)}>
                                        <img src={fileIcon} alt="Icono del archivo" id="fileIcon"/>
                                    </button>       
                                    <h3 className="text-center text-black font-paragraph"> {file.nombrePrograma} </h3> 
                                </article>
                            ))}
                        </section>
                    </article>

                    <button className='absolute bottom-0 left-1/2 -ml-0.5 bg-white border-2 border-darkGray' onClick={() => setShowCreateForm(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-5 h-5 mr-1 absolute right-0 top-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <img src={fileIcon} alt="Icono del archivo" id="fileIcon" className='w-14 p-2 pt-4 hover:scale-105'/>
                    </button>  
                </section>  
            ) : (showDetails == true ? (<FileDetails blockSize={blockSize} files={files} setFiles={setFiles} actualFile={actualFile} setShowDetails={setShowDetails}/>) : 
                <CreateFileForm setShowCreateForm={setShowCreateForm}/>) 
            }           
        </Draggable>
    )
}

export default FilePanel