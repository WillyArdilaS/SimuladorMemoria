import Draggable from 'react-draggable';

const MemoryTable = () => {
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
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 15728640 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> F00000 </td>
                </tr>

                <tr>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 14680064 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> E00000 </td>
                </tr>

                <tr>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 13631488 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> D00000 </td>
                </tr>

                <tr>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 12582912 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> C00000 </td>
                </tr>

                <tr>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 11534336 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> B00000 </td>
                </tr>

                <tr>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 10485760 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> A00000 </td>
                </tr>

                <tr>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 9437184 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 900000 </td>
                </tr>

                <tr>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 8388608 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 800000 </td>
                </tr>

                <tr>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 7340023 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 700000 </td>
                </tr>

                <tr>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 6291456 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 600000 </td>
                </tr>

                <tr>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 5242880 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 500000 </td>
                </tr>

                <tr>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 4194304 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 400000 </td>
                </tr>

                <tr>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 3145728 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 300000 </td>
                </tr>

                <tr>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 2097152 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 200000 </td>
                </tr>

                <tr>
                    <td className="border-x-2 border-t-2 border-darkGray text-center">
                        <div className="flex flex-col h-10">
                            <div className="h-1/3 bg-yellow"></div>
                            <div className="h-2/3 bg-blue relative">
                                <span className="text-sm absolute inset-0 flex items-center justify-center"> P1 </span>
                            </div>
                        </div>
                    </td>
                    <td className="bg-white border-x-2 border-t-2 border-darkGray">
                        <div className="flex flex-col h-10">
                            <div className="h-1/3 bg-yellow"></div>
                            <div className="h-2/3 bg-blue relative">
                                <span className="text-sm absolute inset-0 flex items-center justify-center"> 1.048.576 </span>
                             </div>
                        </div>
                    </td>
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