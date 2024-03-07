import fileIcon from '../../assets/File Icon.jpg'

const FileDetails = ({files, setFiles, actualFile, setShowDetails}) => {
    const handleExecute = () => {
        const updatedFiles = [...files];

        const fileToUpdate = updatedFiles.find(item => item.nombrePrograma == actualFile.nombrePrograma);

        fileToUpdate.memoriaUsar <= 4194304 ? (
            fileToUpdate.estado = !fileToUpdate.estado,
            setFiles(updatedFiles)
        ) : (alert("No hay espacio suficiente en la memoria"))
        
        setShowDetails(false);
    }

    return (
        <article className="z-10 min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 w-full min-h-screen bg-gray-500 opacity-75 -z-10"></div>
                    
            <div className="w-1/3 h-72 shadow-lg">
                <div className="h-3/4 full bg-white rounded-t-lg px-4 py-5">
                    <div className="h-full flex">
                        <section className="flex flex-col items-center self-center">
                            <img src={fileIcon} alt="Icono del archivo" className="w-24" />
                            <span className="text-darkGray font-paragraph mt-1"> {actualFile.nombrePrograma} </span> 
                        </section>
                        
                        <section className='w-full px-10 flex'>
                            <section className='mr-20 flex flex-col justify-between text-darkGray font-paragraph font-semibold'>
                                <span> PID: <span className='font-normal'> {actualFile.id} </span></span>
                                <span> Tamaño en disco: <span className='font-normal'> {actualFile.tamañoDisco} </span></span>
                                <span> Tamaño código: <span className='font-normal'> {actualFile.tamañoCodigo} </span></span>
                                <span> Tamaño datos inicializados: <span className='font-normal'> {actualFile.tdatosInicializados} </span></span>
                            </section>
                                
                            <section className='flex flex-col justify-between text-darkGray font-paragraph font-semibold'>
                                <span> Tamaño de datos sin inicializar: <span className='font-normal'> {actualFile.tdatosSinIniciar} </span></span>
                                <span> Memoria inicial: <span className='font-normal'> {actualFile.memoriaInicial} </span></span>
                                <span> Memoria a usar: <span className='font-normal'> {actualFile.memoriaUsar} </span></span>
                                <span> En KiB: <span className='font-normal'> {actualFile.kib} </span></span>
                            </section>
                        </section>
                    </div>
                </div>

                <section className="bg-gray-100 rounded-b-lg py-4 px-6 flex flex-row-reverse">
                    {files.find(item => item.nombrePrograma == actualFile.nombrePrograma).estado == false ? (
                        <button type="button" className="ml-6 px-6 py-2 bg-blue rounded-md shadow-md font-paragraph font-medium text-sm text-white hover:scale-105" 
                        onClick={handleExecute}> Ejecutar </button>
                    ) : (
                        <button type="button" className="ml-6 px-6 py-2 bg-red-600 rounded-md shadow-md font-paragraph font-medium text-sm text-white hover:scale-105" 
                        onClick={handleExecute}> Detener </button>
                    )}
                    
                    <button type="button" className="px-6 py-2 bg-white rounded-md shadow-md font-paragraph font-medium text-sm text-darkGray hover:scale-105"
                    onClick={() => setShowDetails(false)}> Cancelar </button>
                </section>
            </div>
        </article>
    )
}

export default FileDetails