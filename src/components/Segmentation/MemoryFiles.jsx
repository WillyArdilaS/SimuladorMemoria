import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

const MemoryFiles = ({offset, blockSizes, setBlockSizes, addressLimits, setAddressLimits, adjustment, files, setActiveFiles}) => {
    const [tableData, setTableData] = useState([]);
    const [dataHtml, setDataHtml] = useState([]);
    const [fileEffectCompleted, setFileEffectCompleted] = useState(false);

    const calcultePerc = (memoryUsed, memoryFree, containerHeight) => {
        return (memoryUsed / memoryFree) * containerHeight;
    }
    
    const createSegment = (id, programName, segment, segmentaName, updatedFiles) => {
        let emptyIndex = 0;
        let numSegments = 1;
        let value = parseInt(segment);
        let blockSizesToAdd = []; 
        let addressLimitsToAdd = [];
    
        if (value > offset) {
            numSegments = Math.ceil(value / offset);
        }
    
        for (let i = 0; i < numSegments; i++) {
            updatedFiles.unshift(null);
    
            if (adjustment === 'best') {
                emptyIndex = bestAdjustment(value, updatedFiles);
            }
    
            if (emptyIndex !== undefined) {
                (value > offset ? updatedFiles[emptyIndex] = {id: id, programName: programName, segmentName: segmentaName, value: offset} : 
                    updatedFiles[emptyIndex] = {id: id,  programName: programName, segmentName: segmentaName, value: value});
                
                if (emptyIndex === 0) {
                    if(value > offset) {
                        blockSizesToAdd.push({id: id, blockSize: offset});
                        addressLimitsToAdd.unshift(offset + 1);
                    } else {
                        blockSizesToAdd.push({id: id, blockSize: value});
                        addressLimitsToAdd.unshift(value + 1);
                    }
                    
                } else {
                    updatedFiles.shift();
                }
            }
    
            value -= offset;
    
            setTableData(updatedFiles);
        }
    
        if (blockSizesToAdd.length > 0 && addressLimitsToAdd.length > 0) {
            setBlockSizes(prevBlockSizes => [...prevBlockSizes, ...blockSizesToAdd]);
            setAddressLimits(prevAddressLimits => [...prevAddressLimits, ...addressLimitsToAdd]);
        }
    }
    

    const bestAdjustment = (value, updatedFiles) => {
        let blockIndex = blockSizes.length-1;
    
        do {
            if (value <= blockSizes[blockIndex].blockSize && (updatedFiles[blockIndex] === null || updatedFiles[blockIndex] === undefined)) {
                return blockIndex;
            }
            blockIndex--;
        } while (blockIndex >= 0);
    
        if(blockIndex < 0) {
            alert("No hay espacio suficiente en la memoria");
        }
    }
    
    useEffect(() => {
        if (fileEffectCompleted) {
            let blockSizesUpdated = [...blockSizes];
            const sumOfBlockSizesToAdd = blockSizesUpdated.reduce((acc, { blockSize }, index) => {
                if (index > 0) {
                    return acc + blockSize;
                }
                return acc;
            }, 0);

            blockSizesUpdated[0].blockSize = 15728639 - sumOfBlockSizesToAdd;
        
            setBlockSizes(blockSizesUpdated);  
        }

        setFileEffectCompleted(false);
    }, [blockSizes, fileEffectCompleted]);
 
    useEffect(() => {
        if(fileEffectCompleted) {
          let accumulativeSum = 0;
          const updatedAddressLimits = blockSizes.map((limit, index) => {
            if(index == 0) {
                accumulativeSum = 1048577;
            } else {
                accumulativeSum += limit.blockSize;
            }
              return accumulativeSum;
          });
          
          setAddressLimits(updatedAddressLimits);
        }
    }, [addressLimits, fileEffectCompleted]);

    useEffect(() => {
        let updatedFiles = [...tableData];

        files.map(file => {
            if(file.estado === true) {
                let filePos = -1;

                updatedFiles.map((update, index) => {
                    if(update.id == file.id) {
                        filePos = index; 
                    }
                })

                if(filePos == -1) {       
                    createSegment(file.id, file.nombrePrograma, file.text, 'text', updatedFiles);
                    createSegment(file.id, file.nombrePrograma, file.data, 'data', updatedFiles);
                    createSegment(file.id, file.nombrePrograma, file.bss, 'bss', updatedFiles);
                    createSegment(file.id, file.nombrePrograma, file.heap, 'heap', updatedFiles);
                    createSegment(file.id, file.nombrePrograma, file.stack, 'stack', updatedFiles);
                }
            } else {
                updatedFiles = updatedFiles.filter(data => data.id !== file.id);
                setTableData(updatedFiles);

                setBlockSizes(prevBlockSizes => prevBlockSizes.filter(block => block.id !== file.id));
            }
        });

        const updatedActiveFiles = [...updatedFiles]
        setActiveFiles(updatedActiveFiles.reverse());

        setFileEffectCompleted(true);
    }, [files]);
    
    useEffect(() => {
        const updatedHtml = tableData.map((data, index) => {
            return (data != null ? (
                    <tr style={{height: 20}}>
                        <td className="w-1/2 border-t-2 border-x-2 border-y-2 border-darkGray text-center text-sm">
                            <div className="flex flex-col relative">
                                <div className="bg-blue" style={{height: 20}}>
                                    <span className="absolute inset-0 flex items-center justify-center"> {data.programName + ' (' + data.segmentName + ')'} </span>
                                </div>
                            </div>
                        </td>

                        <td className=" border-x-2 border-y-2 border-darkGray text-center text-sm">
                            <div className="flex flex-col relative">
                                <div className="bg-blue" style={{height: 20}}>
                                    <span className="absolute inset-0 flex items-center justify-center"> {data.value}  </span>
                                </div>
                            </div>
                        </td>

                        <td className="align-bottom pl-2 text-xs font-semibold"> {addressLimits[addressLimits.length - (index + 2)]} </td>
                    </tr>
                ) : (
                    <tr style={{height: 20}}>
                        <td className="w-24 px-4 py-2 border-x-2 border-y-2 border-darkGray text-center text-sm"> </td>
                        <td className="w-24 px-4 py-2 border-x-2 border-y-2 border-darkGray text-center text-sm"> {blockSizes[blockSizes.length - (index+1)].blockSize} </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> {addressLimits[addressLimits.length - (index + 1)]} </td>
                    </tr>
                ) 
            ) 
        });        

        setDataHtml(updatedHtml);
    }, [tableData, addressLimits]);
    
    return (
        <Draggable>
            <div className='overflow-y-auto overflow-x-hidden max-h-screen'>
                <table className="border-collapse text-darkGray font-paragraph">
                    <thead className='align-top h-8'>
                        <th></th>
                        <th></th>
                        <th className='text-xs'> Dec </th>
                    </thead>

                    <tbody>
                        <tr style={{height: calcultePerc(blockSizes[0].blockSize, 15728639, 660)}}>
                            <td className="w-24 px-4 py-2 border-x-2 border-y-2 border-darkGray"> </td>
                            <td className="px-4 py-2 border-x-2 border-y-2 border-darkGray text-center"> {blockSizes[0].blockSize} </td>
                            <td className="align-bottom pl-2 text-xs font-semibold"> {addressLimits[addressLimits.length - 1]} </td>
                        </tr>

                        {dataHtml}

                        <tr className="h-16">
                            <td className="w-24 px-4 py-2 bg-blue border-x-2 border-y-2 border-darkGray text-center text-sm"> S.O </td>
                            <td className="px-4 py-2 bg-blue border-x-2 border-y-2 border-darkGray text-center"> 1048576 </td>
                            <td className={`absolute top-6 ${tableData.length > 0 ? 'left-72 ml-4' : 'left-52'} text-xs font-semibold`}> 16777215 </td>
                            <td className={`absolute -bottom-1 ${tableData.length > 0 ? 'left-72 ml-4' : 'left-52'} ml-1 text-xs font-semibold`}> 0 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Draggable>
    )
}

export default MemoryFiles;
