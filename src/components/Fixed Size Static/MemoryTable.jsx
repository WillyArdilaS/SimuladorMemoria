import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

const MemoryTable = ({files}) => {
    const [tableData, setTableData] = useState([]);

    const calcultePerc = (memoryUsed, memorySize, containerHeight) => {

        return (memoryUsed / memorySize) * containerHeight;
    }

    useEffect(() => {
        const updatedTableData = files.map(file => {
            return file.estado ? (
                file.memoriaUsar <= 1048576 ? (
                    <>
                        <td className="border-x-2 border-t-2 border-darkGray text-center">
                            <div className="flex flex-col h-10 relative">
                                <div className="bg-yellow" style={{height: calcultePerc(1048576-file.memoriaUsar, 1048576, 40)}}></div>
                                <div className="bg-blue" style={{height: calcultePerc(file.memoriaUsar, 1048576, 40)}}>
                                    <span className="text-sm absolute inset-0 flex items-center justify-center"> {file.id} </span>
                                </div>
                            </div>
                        </td>

                        <td className="bg-white border-x-2 border-t-2 border-darkGray">
                            <div className="flex flex-col h-10 relative">
                                <div className="bg-yellow" style={{height: calcultePerc(1048576-file.memoriaUsar, 1048576, 40)}}></div>
                                <div className="bg-blue" style={{height: calcultePerc(file.memoriaUsar, 1048576, 40)}}>
                                    <span className="text-sm absolute inset-0 flex items-center justify-center"> 1.048.576 </span>
                                </div>
                            </div>
                        </td>

                    </>
                ) : (
                    <>
                        <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                        <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    </>,
                    console.log("No hay espacio")
                )
                
            ) : (
                <>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                </>
            );
        });

        // Actualizas el estado local con los datos actualizados
        setTableData(updatedTableData);
    }, [files]);

    return (
        <Draggable>
            <table className="border-collapse text-darkGray font-paragraph">
                <thead className='align-top h-8'>
                    <th></th>
                    <th></th>
                    <th className='text-xs'> Dec </th>
                    <th className='text-xs'> Hex </th>
                </thead>
                
                <tbody>
                    <tr>
                        { tableData[14] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 15728640 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> F00000 </td>
                    </tr>

                    <tr>
                        { tableData[13] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 14680064 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> E00000 </td>
                    </tr>

                    <tr>
                        { tableData[12] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 13631488 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> D00000 </td>
                    </tr>

                    <tr>
                        { tableData[11] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 12582912 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> C00000 </td>
                    </tr>

                    <tr>
                        { tableData[10] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 11534336 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> B00000 </td>
                    </tr>

                    <tr>
                        { tableData[9] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 10485760 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> A00000 </td>
                    </tr>

                    <tr>
                        { tableData[8] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 9437184 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> 900000 </td>
                    </tr>

                    <tr>
                        { tableData[7] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 8388608 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> 800000 </td>
                    </tr>

                    <tr>
                        { tableData[6] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 7340023 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> 700000 </td>
                    </tr>

                    <tr>
                        { tableData[5] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 6291456 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> 600000 </td>
                    </tr>

                    <tr>
                        { tableData[4] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 5242880 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> 500000 </td>
                    </tr>

                    <tr>
                        { tableData[3] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 4194304 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> 400000 </td>
                    </tr>

                    <tr>
                        { tableData[2] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 3145728 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> 300000 </td>
                    </tr>

                    <tr>
                        { tableData[1] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 2097152 </td>
                        <td className="align-bottom pl-2 text-xs font-semibold"> 200000 </td>
                    </tr>

                    <tr>
                        { tableData[0] }
                        <td className="align-bottom pl-2 text-xs font-semibold"> 1048576 </td>
                        <td className="align-bottom pl-1 text-xs font-semibold"> 100000 </td>
                    </tr>

                    <tr>
                        <td className="w-24 px-4 py-2 bg-blue border-x-2 border-y-2 border-darkGray text-center text-sm"> S.O </td>
                        <td className="px-4 py-2 bg-blue border-x-2 border-y-2 border-darkGray text-center text-sm"> 1.048.576 </td>
                        <td className="absolute top-6 left-52 text-xs font-semibold"> 16777215 </td>
                        <td className="absolute top-6 right-1 text-xs font-semibold"> FFFFFF </td>
                        <td className="absolute -bottom-1 left-52 text-xs font-semibold"> 0 </td>
                        <td className="absolute -bottom-1 right-11 text-xs font-semibold"> 0 </td>
                    </tr>
                </tbody>
            </table>
        </Draggable>
    )
}

export default MemoryTable