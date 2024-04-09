import Draggable from 'react-draggable';

const AddressTable = ({activeFiles, blockSizes, addressLimits}) => {
  return (
    <Draggable>
        <table className="border-collapse bg-white shadow-lg text-darkGray font-paragraph">
            <thead>
                <tr className="border-t-2 border-darkGray">
                    <th rowSpan="2" className="px-4 py-2 border-x-2 border-darkGray"> PID </th>
                    <th rowSpan="2" className="px-4 py-2 border-x-2 border-darkGray"> L/O </th>
                    <th colSpan="2" className="px-4 py-2 border-x-2 border-darkGray"> Base </th>
                    <th rowSpan="2" className="px-4 py-2 border-x-2 border-darkGray"> Tamaño (KiB) </th>
                </tr>

                <tr className="border-t-2 border-darkGray">
                    <th colSpan="2" className="px-4 py-2 border-x-2 border-darkGray"> Dec </th>
                </tr>
            </thead>

            <tbody>
                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> SO </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 1 </td>
                    <td colSpan="2" className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 1024 </td>
                </tr>

                {activeFiles.map((file, index) => (
                    <tr className="border-y-2 border-darkGray">
                        <td className="px-4 py-2 border-x-2 border-darkGray text-center"> {file !== null && file !== undefined ? (file.id) : ("0")} </td>
                        <td className="px-4 py-2 border-x-2 border-darkGray text-center"> {file !== null && file !== undefined ? ("1") : ("0")} </td>
                        <td colSpan="2" className="px-4 py-2 border-x-2 border-darkGray text-center"> {addressLimits[index + 1]} </td>
                        <td className="px-4 py-2 border-x-2 border-darkGray text-center"> {blockSizes[index + 1]} </td>
                    </tr>
                ))}

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td colSpan="2" className="px-4 py-2 border-x-2 border-darkGray text-center"> {addressLimits[0]} </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> {blockSizes[0]} </td>
                </tr>
            </tbody>
        </table>
    </Draggable>
  )
}

export default AddressTable