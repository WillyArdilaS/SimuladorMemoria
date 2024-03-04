import Draggable from 'react-draggable';

const FeaturesTable = () => {
  return (
    <Draggable>
        <table className="border-collapse bg-white shadow-lg text-darkGray font-paragraph">
            <thead>
                <tr className="border-t-2 border-darkGray">
                    <th className="px-4 py-2 border-x-2 border-darkGray"></th>
                    <th className="px-4 py-2 border-x-2 border-darkGray"> MiB </th>
                    <th className="px-4 py-2 border-x-2 border-darkGray"> KiB </th>
                    <th className="px-4 py-2 border-x-2 border-darkGray"> Bytes </th>
                </tr>
            </thead>

            <tbody>
                <tr className="border-t-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray font-bold"> Ram instalada </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 16 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 16384 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 16777246 </td>
                </tr>

                <tr className="border-t-2 border-x-2 border-darkGray">
                    <td className="px-4 py-2 font-bold" colSpan="4"> Del sistema operativo </td>
                </tr>

                <tr className="border-t-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray"> Pila </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"></td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 64 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 65536 </td>
                </tr>

                <tr className="border-t-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray"> Montículo </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"></td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 128 </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 131072 </td>
                </tr>

                <tr className="border-t-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray"></td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"></td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"></td>
                    <td className="px-4 py-2 border-x-2 border-darkGray font-bold"> 196608 </td>
                </tr>

                <tr className="border-y-2 border-darkGray">
                    <td className="px-4 py-2 border-x-2 border-darkGray"> Encabezado EXE </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"></td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"></td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 767 </td>
                </tr>
            </tbody>
        </table>
    </Draggable>
  )
}

export default FeaturesTable