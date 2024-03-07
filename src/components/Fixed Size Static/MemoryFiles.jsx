import { useEffect, useState } from 'react';

const MemoryFiles = ({blockSize, files, setActiveFiles}) => {
    const [tableData, setTableData] = useState(Array(15).fill(null));
    const [dataHtml, setDataHtml] = useState([]);

    const calcultePerc = (memoryUsed, containerHeight) => {
        return (memoryUsed / blockSize) * containerHeight;
    }
    
    useEffect(() => {
        const updatedFiles = [...tableData];

        files.map(file => {
            if(file.memoriaUsar <= blockSize && file.estado === true) {
                let filePos = -1;

                updatedFiles.map((update, index) => {
                    if(update == file) {
                        filePos = index; 
                    }
                })

                if(filePos == -1) {
                    let emptyIndex = 15;
                    do {
                        if(updatedFiles[emptyIndex] === null) {
                            updatedFiles[emptyIndex] = file;
                            break;
                        } else {
                            emptyIndex--;
                        }
                    } while(emptyIndex >= 0)
                }
            }

            if(file.estado === false) {
                let emptyIndex = updatedFiles.findIndex(data => data === file);
                updatedFiles[emptyIndex] = null;
            }
        });

        setTableData(updatedFiles);

        const updatedActiveFiles = [...updatedFiles]
        setActiveFiles(updatedActiveFiles.reverse());
    }, [files]);

    useEffect(() => {
        const updatedHtml = tableData.map(data => {
            return (data != null ? (
                <tr>
                    <td className="border-x-2 border-t-2 border-darkGray text-center">
                        <div className="flex flex-col h-10 relative">
                            <div className="bg-yellow" style={{height: calcultePerc(blockSize-data.memoriaUsar, 40)}}></div>
                            <div className="bg-blue" style={{height: calcultePerc(data.memoriaUsar, 40)}}>
                                <span className="absolute inset-0 flex items-center justify-center"> {data.id} </span>
                            </div>
                        </div>
                    </td>
        
                    <td className="border-x-2 border-t-2 border-darkGray">
                        <div className="flex flex-col h-10 relative">
                            <div className="bg-yellow" style={{height: calcultePerc(blockSize-data.memoriaUsar, 40)}}></div>
                            <div className="bg-blue" style={{height: calcultePerc(data.memoriaUsar, 40)}}>
                                <span className="absolute inset-0 flex items-center justify-center"> {blockSize} </span>
                            </div>
                        </div>
                    </td>
                </tr>
            ) : (
                <tr>
                    <td className="w-24 px-4 border-x-2 border-t-2 border-darkGray"> </td>
                    <td className="w-24 py-2 px-4 border-x-2 border-t-2 border-darkGray text-center"> {blockSize} </td>
                </tr>
            )
                
            ) 
        });        

        setDataHtml(updatedHtml);
    }, [tableData])
    
    return (
        <table className="border-collapse text-darkGray font-paragraph">
            <tbody>
                {dataHtml}
            </tbody>
        </table>
    )
}

export default MemoryFiles;
