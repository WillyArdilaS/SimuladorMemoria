import Draggable from 'react-draggable';

const LogicAddressTable = () => {
  return (
    <Draggable>
        <section>
            <h1 className="text-darkGray text-lg font-semibold mb-2"> Dirección Lógica </h1>

            <table className="border-collapse bg-white shadow-lg text-darkGray font-paragraph">
                <thead>
                    <tr className="border-t-2 border-darkGray">
                        <th className="px-4 py-2 border-x-2 border-darkGray"> RAM </th>
                        <th className="px-4 py-2 border-x-2 border-darkGray"> Páginas </th>
                        <th className="px-4 py-2 border-x-2 border-darkGray"> Offset </th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-y-2 border-darkGray">
                        <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 24 </td>
                        <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 8 </td>
                        <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 16 </td>
                    </tr>
                    
                    <tr className="border-y-2 border-darkGray">
                        <td className="border-x-2 border-darkGray"></td>
                        <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 256 </td>
                        <td className="px-4 py-2 border-x-2 border-darkGray text-center"> 65536 </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </Draggable>
  )
}

export default LogicAddressTable