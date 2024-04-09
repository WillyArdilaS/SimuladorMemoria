import Draggable from 'react-draggable';

const AddressTable = ({activeFile, addressLimits, addressIndex}) => {   
    return (
        <Draggable>
            <section>
                <h1 className="text-darkGray text-lg font-semibold mb-2">  {activeFile[0].id + " - " + activeFile[0].programName}</h1>

                <table className="border-collapse bg-white shadow-lg text-darkGray font-paragraph">
                    <thead>
                        <tr className="border-2 border-darkGray">
                            <th colSpan="2" className="px-4 py-2 border-x-2 border-darkGray"> Segmento </th>
                            <th colSpan="2" className="px-4 py-2 border-x-2 border-darkGray"> Base </th>
                            <th rowSpan="2" className="px-4 py-2 border-x-2 border-darkGray"> Límite </th>
                            <th rowSpan="2" className="px-4 py-2 border-x-2 border-darkGray"> Permisos </th>
                        </tr>

                        <tr className="border-2 border-darkGray">
                            <th className="px-4 py-2 border-x-2 border-darkGray"> Num </th>
                            <th className="px-4 py-2 border-x-2 border-darkGray"> Bin </th>
                            <th className="px-4 py-2 border-x-2 border-darkGray"> Dec </th>
                            <th className="px-4 py-2 border-x-2 border-darkGray"> Hex </th>
                        </tr>
                    </thead>

                    <tbody>
                        {activeFile.map((file, index) => (
                            <tr className="border-y-2 border-darkGray">
                                <td className="px-4 py-2 border-x-2 border-darkGray text-center"> {index} </td>
                                <td className="px-4 py-2 border-x-2 border-darkGray text-center"> Binario </td>
                                <td className="px-4 py-2 border-x-2 border-darkGray text-center"> {addressLimits[addressIndex + index]} </td>
                                <td className="px-4 py-2 border-x-2 border-darkGray text-center"> Hex </td>
                                <td className="px-4 py-2 border-x-2 border-darkGray text-center"> {file.value} </td>
                                <td className="px-4 py-2 border-x-2 border-darkGray text-center"> {file.segmentName  == 'text' ? 'RX' : 'RW'} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </Draggable>
    )
}

export default AddressTable