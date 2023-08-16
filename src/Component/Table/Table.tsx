import { value } from "../../type"
import Row from "./Row"

type table = {
    array: value[]
    player: value
    handlePlayer: Function
}

export default function Table({ array, player, handlePlayer }: table) {
    return (
        <table className='table'>
            <Row array={array} player={player} handlePlayer={handlePlayer} />
        </table>
    )
}