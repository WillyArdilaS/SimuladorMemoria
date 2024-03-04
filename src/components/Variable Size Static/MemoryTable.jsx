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
                <tr className="h-32">
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 4.194.304 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 12582912 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> C00000 </td>
                </tr>

                <tr className="h-32">
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 4.194.304 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 8388608 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 800000 </td>
                </tr>

                <tr className="h-24">
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 2.097.152 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 6291456 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 600000 </td>
                </tr>

                <tr className="h-24">
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 2.097.152 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 4194304 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 400000 </td>
                </tr>

                <tr className="h-16">
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 3145728 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 300000 </td>
                </tr>

                <tr className="h-16">
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 1.048.576 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 2097152 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 200000 </td>
                </tr>

                <tr className="h-8">
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> </td>
                    <td className="bg-white px-4 py-2 border-x-2 border-t-2 border-darkGray text-center"> 524.288 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 1572864 </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 180000 </td>
                </tr>

                <tr className="h-8">
                    <td className="border-x-2 border-t-2 border-darkGray text-center">
                        <div className="flex flex-col h-10">
                            <div className="h-1/3 bg-yellow"></div>
                            <div className="h-2/3 bg-blue relative">
                                <span className="text-sm  absolute inset-0 flex items-center justify-center"> P1 </span>
                            </div>
                        </div>
                    </td>
                    <td className="bg-white border-x-2 border-t-2 border-darkGray">
                        <div className="flex flex-col h-10">
                            <div className="h-1/3 bg-yellow"></div>
                            <div className="h-2/3 bg-blue relative">
                                <span className="text-sm  absolute inset-0 flex items-center justify-center"> 524.288 </span>
                             </div>
                        </div>
                    </td>
                    <td className="align-bottom pl-2 text-xs font-semibold"> 1048576 </td>
                    <td className="align-bottom pl-1 text-xs font-semibold"> 100000 </td>
                </tr>

                <tr className="h-16">
                    <td className="w-24 px-4 py-2 bg-blue border-x-2 border-y-2 border-darkGray text-center text-sm"> S.O </td>
                    <td className="px-4 py-2 bg-blue border-x-2 border-y-2 border-darkGray text-sm text-center"> 1.048.576 </td>
                    <td className="absolute top-6 left-52 text-xs font-semibold"> 16777215 </td>
                    <td className="absolute top-6 right-1 text-xs font-semibold"> FFFFFF </td>
                    <td className="absolute -bottom-1 left-52 ml-1 text-xs font-semibold"> 0 </td>
                    <td className="absolute -bottom-1 right-11 text-xs font-semibold"> 0 </td>
                </tr>
            </tbody>
        </table>
    </Draggable>
  )
}

export default MemoryTable