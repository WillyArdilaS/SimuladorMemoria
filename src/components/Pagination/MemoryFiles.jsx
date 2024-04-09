import { useEffect, useState } from 'react';

const MemoryFiles = ({blockSizes, setBlockSizes, addressLimits, setAddressLimits, adjustment, files, setActiveFiles}) => {
    const [tableData, setTableData] = useState([]);
    const [dataHtml, setDataHtml] = useState([]);

    const calcultePerc = (memoryUsed, memoryFree, containerHeight) => {

        return (memoryUsed / memoryFree) * containerHeight;
    }

    const addBlockSize = (blockSize) => {
        let updatedBlockSizes = [...blockSizes];
        updatedBlockSizes.push(blockSize);
        updatedBlockSizes[0] -= blockSize;

        setBlockSizes(updatedBlockSizes);
    }

    const addAddressLimits = (memoryUsed) => {
        let updatedAddressLimits = [...addressLimits];
        updatedAddressLimits.push(updatedAddressLimits[0]);
        updatedAddressLimits[0] = parseInt(updatedAddressLimits[0]) + parseInt(memoryUsed);

        setAddressLimits(updatedAddressLimits);
    }
    
    const firstAdjustment = (file, updatedFiles) => {
        let blockIndex = blockSizes.length-1;
    
        do {
            if (file.memoriaUsar <= blockSizes[blockIndex] && (updatedFiles[blockIndex] === null || updatedFiles[blockIndex] === undefined)) {
                return blockIndex;
            }
            blockIndex--;
        } while (blockIndex >= 0);
    
        if(blockIndex < 0) {
            alert("No hay espacio suficiente en la memoria");
        }
    }
    
    useEffect(() => {
        let updatedFiles = [...tableData];

        files.map(file => {
            if(file.estado === true) {
                let filePos = -1;

                updatedFiles.map((update, index) => {
                    if(update == file) {
                        filePos = index; 
                    }
                })

                if(filePos == -1) {
                    updatedFiles.unshift(null);
                    
                    let emptyIndex;

                    if(adjustment == 'first') {
                        emptyIndex = firstAdjustment(file, updatedFiles);
                    }

                    if(emptyIndex !== undefined) {
                        updatedFiles[emptyIndex] = file;

                        if(emptyIndex === 0) {
                            addBlockSize(file.memoriaUsar);
                            addAddressLimits(file.memoriaUsar);
                        } else {
                            updatedFiles.shift();
                        }
                    } else {
                        updatedFiles.shift();
                    }
                }
            }

            if(file.estado === false) {
                let emptyIndexFile = updatedFiles.findIndex(data => data === file);
                updatedFiles[emptyIndexFile] = null;
            }
        });

        setTableData(updatedFiles);

        const updatedActiveFiles = [...updatedFiles]
        setActiveFiles(updatedActiveFiles.reverse());
    }, [files]);

    useEffect(() => {
        const updatedHtml = tableData.map((data, index) => {
            return (data != null ? (
                    <tr style={{height: calcultePerc(data.memoriaUsar, 15728639, 660)}}>
                        <td className="border-t-2 border-x-2 border-y-2 border-darkGray text-center text-sm">
                            <div className="flex flex-col relative" style={{height: calcultePerc(data.memoriaUsar, 15728639, 650)}}>
                                <div className="bg-yellow" style={{height: calcultePerc((blockSizes[blockSizes.length - (index + 1)] - data.memoriaUsar), 
                                blockSizes[blockSizes.length - (index+1)], calcultePerc(data.memoriaUsar, 15728639, 650))}}></div>
                                <div className="bg-blue" style={{height: calcultePerc(data.memoriaUsar, blockSizes[blockSizes.length - (index+1)], 
                                calcultePerc(data.memoriaUsar, 15728639, 650))}}>
                                    <span className="absolute inset-0 flex items-center justify-center"> {data.id} </span>
                                </div>
                            </div>
                        </td>

                        <td className=" border-x-2 border-y-2 border-darkGray text-center text-sm">
                            <div className="flex flex-col relative" style={{height: calcultePerc(data.memoriaUsar, 15728639, 650)}}>
                                <div className="bg-yellow" style={{height: calcultePerc((blockSizes[blockSizes.length - (index + 1)] - data.memoriaUsar), 
                                blockSizes[blockSizes.length - (index+1)], calcultePerc(data.memoriaUsar, 15728639, 650))}}></div>
                                <div className="bg-blue" style={{height: calcultePerc(data.memoriaUsar, blockSizes[blockSizes.length - (index+1)], 
                                calcultePerc(data.memoriaUsar, 15728639, 650))}}>
                                    <span className="absolute inset-0 flex items-center justify-center"> {blockSizes[blockSizes.length - (index+1)]}  </span>
                                </div>
                            </div>
                        </td>

                        <td className="align-bottom pl-2 text-xs font-semibold"> {addressLimits[addressLimits.length - (index + 1)]} </td>
                    </tr>
                ) : (
                    <tr style={{height: calcultePerc(blockSizes[blockSizes.length - (index + 1)], 15728639, 660)}}>
                        <td className="w-24 px-4 py-2 border-x-2 border-y-2 border-darkGray text-center text-sm"> </td>
                        <td className="w-24 px-4 py-2 border-x-2 border-y-2 border-darkGray text-center text-sm"> {blockSizes[blockSizes.length - (index+1)]} </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> {addressLimits[addressLimits.length - (index + 1)]} </td>
                    </tr>
                ) 
            ) 
        });        

        setDataHtml(updatedHtml);
    }, [tableData])
    
    return (
        <table className="border-collapse text-darkGray font-paragraph">
            <thead className='align-top h-8'>
                <th></th>
                <th></th>
                <th className='text-xs'> Dec </th>
            </thead>

            <tbody>
                <tr style={{height: calcultePerc(blockSizes[0], 15728639, 660)}}>
                    <td className="w-24 px-4 py-2 border-x-2 border-y-2 border-darkGray"> </td>
                    <td className="px-4 py-2 border-x-2 border-y-2 border-darkGray text-center"> {blockSizes[0]} </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> {addressLimits[0]} </td>
                </tr>

                {dataHtml}

                <tr className="h-16">
                    <td className="w-24 px-4 py-2 bg-blue border-x-2 border-y-2 border-darkGray text-center text-sm"> S.O </td>
                    <td className="px-4 py-2 bg-blue border-x-2 border-y-2 border-darkGray text-center"> 1048576 </td>
                    <td className="absolute top-6 left-52 text-xs font-semibold"> 16777215 </td>
                    <td className="absolute -bottom-1 left-52 ml-1 text-xs font-semibold"> 0 </td>
                </tr>
            </tbody>
        </table>
    )
}

export default MemoryFiles;
