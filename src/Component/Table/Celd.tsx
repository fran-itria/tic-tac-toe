import { value } from "../../type"

type celd = {
    index: number
    array: value[]
    player: value
    handlePlayer: Function
}

export default function Celd({ index, array, player, handlePlayer }: celd) {
    return (
        <td className='casilla'>
            {array[index] == null ?
                <button
                    className={player == 'X' ? 'buttonX' : 'buttonY'}
                    value={index}
                    onClick={(event) => handlePlayer(event)}
                >
                    {(array[index] != null) ? array[index] : <></>}
                </button>
                :
                <button className={player == 'X' ? 'buttonX' : 'buttonY'} disabled>
                    {(array[index] != null) ? array[index] : <></>}
                </button>
            }
        </td>
    )
}