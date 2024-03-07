import { useEffect, useState } from 'react';

const MemoryFiles = ({blockSizes, adjustment, files, setActiveFiles}) => {
    const [tableData, setTableData] = useState(Array(8).fill(null));
    const [dataHtml, setDataHtml] = useState([]);

    const calcultePerc = (memoryUsed, blockNum, containerHeight) => {
        return (memoryUsed / blockNum) * containerHeight;
    }

    const calculateRowSize = (blockSize) => {
        if(blockSize == 4194304) {
            return 128;
        } else if(blockSize == 2097152) {
            return 96;
        } else if(blockSize == 1048576) {
            return 64;
        } else if(blockSize == 524288) {
            return 38;
        }
    } 

    const firstAdjustment = (file) => {
        let blockIndex = 7;

        do {
            if(file.memoriaUsar <= blockSizes[blockIndex] && tableData[blockIndex] === null) {
                return blockIndex;
            }

            blockIndex--;
        } while(blockIndex >= 0)

        if(blockIndex < 0) {
            alert("No hay espacio suficiente en la memoria");
        }
    }
    
    const bestAdjustment = (file) => {
        let blockIndex = 7;

        do {
            if(file.memoriaUsar <= blockSizes[blockIndex] && tableData[blockIndex] === null) {
                return blockIndex;
            }

            blockIndex--;
        } while(blockIndex >= 0)

        if(blockIndex < 0) {
            alert("No hay espacio suficiente en la memoria");
        }
    }
    
    const worstAdjustment = (file) => {
        let blockIndex = 0;

        do {
            if(file.memoriaUsar <= blockSizes[blockIndex] && tableData[blockIndex] === null) {
                return blockIndex;
            }

            blockIndex++;
        } while(blockIndex <= 7);

        if(blockIndex > 7) {
            setActualBlock
            alert("No hay espacio suficiente en la memoria");
        }
    }
    
    useEffect(() => {
        const updatedFiles = [...tableData];

        files.map(file => {
            if(file.estado === true) {
                let filePos = -1;

                updatedFiles.map((update, index) => {
                    if(update == file) {
                        filePos = index; 
                    }
                })

                if(filePos == -1) {
                    let emptyIndex;

                    if(adjustment == 'first') {
                        emptyIndex = firstAdjustment(file);
                    } else if(adjustment == 'best') {
                        emptyIndex = bestAdjustment(file);
                    } else if(adjustment == 'worst') {
                        emptyIndex = worstAdjustment(file);
                    }
                    updatedFiles[emptyIndex] = file;
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
        const updatedHtml = tableData.map((data, index) => {
            return (data != null ? (
                    <tr style={{height: calculateRowSize(blockSizes[index])}}>
                        <td className="border-x-1 border-t-2 border-darkGray text-center">
                            <div className="flex flex-col relative" style={{height: calculateRowSize(blockSizes[index])}}>
                                <div className="bg-yellow"  style={{height: calcultePerc(blockSizes[index]-data.memoriaUsar, blockSizes[index], 
                                calculateRowSize(blockSizes[index]))}}></div>
                                <div className="bg-blue"  style={{height: calcultePerc(data.memoriaUsar, blockSizes[index], 
                                calculateRowSize(blockSizes[index]))}}>
                                    <span className="absolute inset-0 flex items-center justify-center"> {data.id} </span>
                                </div>
                            </div>
                        </td>

                        <td className="border-x-1 border-t-2 border-darkGray">
                            <div className="flex flex-col relative" style={{height: calculateRowSize(blockSizes[index])}}>
                                <div className="bg-yellow" style={{height: calcultePerc(blockSizes[index]-data.memoriaUsar, blockSizes[index], 
                                calculateRowSize(blockSizes[index]))}}></div>
                                <div className="bg-blue"  style={{height: calcultePerc(data.memoriaUsar, blockSizes[index], 
                                calculateRowSize(blockSizes[index]))}}>
                                    <span className="absolute inset-0 flex items-center justify-center"> {blockSizes[index]}  </span>
                                </div>
                            </div>
                        </td>
                    </tr>
                ) : (
                    <tr style={{height: calculateRowSize(blockSizes[index])}}>
                        <td className="w-24 px-4 py-2 border-x-1 border-t-2 border-darkGray text-center"> </td>
                        <td className="w-24 px-4 py-2 border-x-1 border-t-2 border-darkGray text-center"> {blockSizes[index]} </td>
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
