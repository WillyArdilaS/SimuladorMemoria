import Draggable from "react-draggable"

const AdjustmentSelector = () => {
  return (
    <Draggable>
        <select className="w-1/6 py-1 px-2 bg-white border-2 border-darkGray shadow-lg">
            <option value="first"> Primer ajuste </option>
            <option value="best"> Mejor ajuste </option>
            <option value="worst"> Peor ajuste </option>
        </select>
    </Draggable>
  )
}

export default AdjustmentSelector