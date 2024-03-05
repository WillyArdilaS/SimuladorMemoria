import { useState } from 'react';
import FilesInfo from '../data/FilesInfo.json';
import fileIcon from '../assets/File Icon.jpg'

const CreateFileForm = ({setShowCreateForm}) => {
    const [name, setName] = useState("");
    const [pid, setPid] = useState("");
    const [diskSize, setDiskSize] = useState("");
    const [codeSize, setCodeSize] = useState("");
    const [initializedDataSize, setInitializedDataSize] = useState("");
    const [uninitializedDataSize, setUninitializedDataSize] = useState("");
    const [initialMemory, setInitialMemory] = useState("");
    const [memoryToUse, setMemoryToUse] = useState("");
    const [inKib, setInKib] = useState("");

    const handleCreateFile = () => {
        const newFile = {
            id: pid,
            nombrePrograma: name,
            tamañoDisco: diskSize,
            tamañoCodigo: codeSize,
            tdatosInicializados: initializedDataSize,
            tdatosSinIniciar: uninitializedDataSize,
            memoriaInicial: initialMemory,
            memoriaUsar: memoryToUse,
            kib: inKib
        };
    
        const updatedData = [...FilesInfo, newFile];
        const updatedJsonString = JSON.stringify(updatedData, null, 2);
    
        const blob = new Blob([updatedJsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement('a');
        a.href = url;
        a.download = 'FilesInfoUpdated.json';
        document.body.appendChild(a);
        a.click();
    
        URL.revokeObjectURL(url);

        setShowCreateForm(false);
    };
    
    return (
        <article className="z-10 min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 w-full min-h-screen bg-gray-500 opacity-75 -z-10"></div>
                    
            <div className="w-2/5 h-96 shadow-lg">
                <div className="h-3/4 full bg-white rounded-t-lg px-4 py-4">
                    <div className="h-full flex">
                        <section className="flex flex-col items-center self-center">
                            <img src={fileIcon} alt="Icono del archivo" className="w-28"/>
                            <span className="flex justify-center text-darkGray font-paragraph mt-1"> 
                                <input className='w-11/12 mt-2 px-1 border-2 border-darkGray rounded-md font-normal text-sm' placeholder='Nombre' value={name}
                                onChange={(e)=> setName(e.target.value)}/>
                            </span> 
                        </section>
                        
                        <section className='w-full px-14 flex'>
                            <section className='mr-8 flex flex-col justify-between text-darkGray font-paragraph font-semibold'>
                                <span className='flex flex-col'> PID: <input className='w-4/5 mt-2 px-1 border-2 border-darkGray rounded-md font-normal text-sm' value={pid}
                                onChange={(e)=> setPid(e.target.value)}/></span>
                                <span> Tamaño en disco: <input type='number' min={0} className='w-4/5 mt-2 px-1 border-2 border-darkGray rounded-md font-normal text-sm' 
                                value={diskSize} onChange={(e)=> setDiskSize(e.target.value)}/></span>
                                <span> Tamaño código: <input type='number' min={0} className='w-4/5 mt-2 px-1 border-2 border-darkGray rounded-md font-normal text-sm' 
                                value={codeSize} onChange={(e)=> setCodeSize(e.target.value)}/></span>
                                <span> Tamaño datos inicializados: 
                                    <input type='number' min={0} className='w-4/5 mt-2 px-1 border-2 border-darkGray rounded-md font-normal text-sm' value={initializedDataSize}
                                onChange={(e)=> setInitializedDataSize(e.target.value)}/>
                                </span>
                            </section>
                                
                            <section className='flex flex-col justify-between text-darkGray font-paragraph font-semibold'>
                                <span> Tamaño de datos sin inicializar: <input type='number' min={0} className='w-4/5 mt-2 px-1 border-2 border-darkGray rounded-md font-normal 
                                text-sm' value={uninitializedDataSize} onChange={(e)=> setUninitializedDataSize(e.target.value)}/></span>
                                <span> Memoria inicial: <input type='number' min={0} className='w-4/5 mt-2 px-1 border-2 border-darkGray rounded-md font-normal text-sm'
                                value={initialMemory} onChange={(e)=> setInitialMemory(e.target.value)}/></span>
                                <span> Memoria a usar: <input type='number' min={0} className='w-4/5 mt-2 px-1 border-2 border-darkGray rounded-md font-normal text-sm'
                                value={memoryToUse} onChange={(e)=> setMemoryToUse(e.target.value)}/></span>
                                <span className='flex flex-col'> En KiB: <input type='number' min={0} className='w-4/5 mt-2 px-1 border-2 border-darkGray rounded-md font-normal 
                                text-sm' value={inKib} onChange={(e)=> setInKib(e.target.value)}/></span>
                            </section>
                        </section>
                    </div>
                </div>

                <section className="bg-gray-100 rounded-b-lg py-4 px-6 flex flex-row-reverse">
                    <button type="button" className="ml-6 px-6 py-2 bg-blue rounded-md shadow-md font-paragraph font-medium text-sm text-white hover:scale-105" 
                    onClick={handleCreateFile}> Ejecutar </button>
                    <button type="button" className="px-6 py-2 bg-white rounded-md shadow-md font-paragraph font-medium text-sm text-darkGray hover:scale-105"
                    onClick={() => setShowCreateForm(false)}> Cancelar </button>
                </section>
            </div>
        </article>
    )
}

export default CreateFileForm