import { value } from "../../type"
import Celd from "./Celd"

type row = {
    array: value[]
    player: value
    handlePlayer: Function
}

export default function Row({ array, player, handlePlayer }: row) {
    return (
        <>
            <tr className='column'> 
                <Celd index={0} array={array} player={player} handlePlayer={handlePlayer} />
                <Celd index={1} array={array} player={player} handlePlayer={handlePlayer} />
                <Celd index={2} array={array} player={player} handlePlayer={handlePlayer} />
            </tr>
            <tr className='column'> 
                <Celd index={3} array={array} player={player} handlePlayer={handlePlayer} />
                <Celd index={4} array={array} player={player} handlePlayer={handlePlayer} />
                <Celd index={5} array={array} player={player} handlePlayer={handlePlayer} />
            </tr>
            <tr className='column'> 
                <Celd index={6} array={array} player={player} handlePlayer={handlePlayer} />
                <Celd index={7} array={array} player={player} handlePlayer={handlePlayer} />
                <Celd index={8} array={array} player={player} handlePlayer={handlePlayer} />
            </tr>
        </>
    )
}