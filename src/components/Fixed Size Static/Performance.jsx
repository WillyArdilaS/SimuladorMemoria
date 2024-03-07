import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

const Performance = ({memorySize, blockSize, activeFiles}) => {
    const [extended, setExtended] = useState(true);
    const [performanceFiles, setPerformanceFiles] = useState([]);

    const calcultePerc = (memoryUsed, containerHeight) => {
        return (memoryUsed / memorySize) * containerHeight;
    }
    
    useEffect(() => {
        const updatedFiles = [];

        activeFiles.map(file => {
            if(file !== null && file !== undefined) {
                updatedFiles.push(file);
            }
        })

        setPerformanceFiles(updatedFiles)
    }, [activeFiles])
    

    return (
        <Draggable>
            {extended == true ? (
                <article className="w-1/4 bg-white shadow-lg">
                    <div className="h-7 border-x-2 border-y-2 border-darkGray bg-lightGray"></div>
            
                    <section className="px-2 pt-2 pb-10 border-x-2 border-b-2 border-darkGray font-paragraph flex"> 
                        <section>
                            {performanceFiles.map(file => (
                                <div className="py-2"> {file.nombrePrograma} </div>
                            ))}
                        </section>
                
                        <section className="w-3/4 ml-10 flex flex-col">
                            {
                                performanceFiles.map(file => (
                                    <section className="h-5 my-2.5 bg-darkGray flex">
                                        <div className="h-full bg-blue" style={{width: calcultePerc(file.memoriaUsar, 490)}}> </div>
                                        <div className="h-full bg-yellow" style={{width: calcultePerc(blockSize-file.memoriaUsar, 490)}}> </div>
                                    </section>
                                ))
                            }
                        </section>
            
                        <button className="absolute right-4 bottom-0 h-6 w-6 mb-3 rounded-full border-2 border-lightGray text-lightGray flex items-center justify-center
                        hover:scale-105" onClick={() => setExtended(!extended)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </section>
                </article>
            ) : (
                <article className="w-1/4 shadow-lg ">
                    <div className="h-7 border-x-2 border-y-2 border-darkGray bg-lightGray"></div>
            
                    <section className="px-2 pt-2 pb-10 border-x-2 border-b-2 border-darkGray font-paragraph"> 
                        <button className="absolute right-4 bottom-0 h-6 w-6 mb-3 rounded-full border-2 border-lightGray text-lightGray flex items-center justify-center
                        hover:scale-105" onClick={() => setExtended(!extended)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </section>
                </article>
            )}
        </Draggable>
    )
}

export default Performance