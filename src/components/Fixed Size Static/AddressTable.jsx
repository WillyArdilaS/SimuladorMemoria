import Draggable from 'react-draggable';

const AddressTable = () => {
  return (
    <Draggable>
        <table className="border-collapse bg-white shadow-lg text-darkGray font-paragraph">
            <thead>
                <tr className="border-t-2 border-darkGray">
                    <th rowSpan="2" className="px-4 py-2 border-x-2 border-darkGray"> PID </th>
                    <th rowSpan="2" className="px-4 py-2 border-x-2 border-darkGray"> L/O </th>
                    <th colSpan="2" className="px-4 py-2 border-x-2 border-darkGray"> Base </th>
                </tr>

                <tr className="border-t-2 border-darkGray">
                    <th  className="px-4 py-2 border-x-2 border-darkGray"> Dec </th>
                    <th  className="px-4 py-2 border-x-2 border-darkGray"> Hex </th>
                </tr>
            </thead>

            <tbody>
                <tr className="border-t-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> SO </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 1 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 000000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> P1 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 1 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 1048576 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 100000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 3145728 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 300000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 4194304 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 400000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 5242880 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 500000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 6291456 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 600000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 7340023 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 700000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 8388608 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 800000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 9437184 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 900000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 10485760 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> A00000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 11534336 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> B00000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 12582912 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> C00000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 13631488 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> D00000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 14680064 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> E00000 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 0 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 15728640 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray text-center"> F00000 </td>
                </tr>
            </tbody>
        </table>
    </Draggable>
  )
}

export default AddressTable