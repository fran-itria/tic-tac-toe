import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './Component/Table/Table';
type value = 'X' | 'O' | null

function App() {
  const base: value[] = [
    null, null, null,
    null, null, null,
    null, null, null
  ]

  const [array, setArray] = useState<value[]>(base)
  const [winner, setWinner] = useState<boolean>(false)
  const [round, setRound] = useState<number>(1)
  const [player, setPlayer] = useState<value>('X')

  const handlePlayer = (event: any) => {
    const value: number = event.target?.value
    const replaceArray = [...array]
    replaceArray[value] = player
    setArray(replaceArray)
    if (winner) {
      return
    }
    setRound(round + 1)
  }

  const victory = (round: number) => {
    if (round > 5) {
      if ((array[0] == array[1] && array[1] == array[2]) || (array[0] == array[3] && array[3] == array[6])) return true
      if ((array[3] == array[4] && array[4] == array[5]) || (array[4] == array[1] && array[1] == array[7])) return true
      if ((array[6] == array[7] && array[7] == array[8]) || (array[8] == array[5] && array[5] == array[2])) return true
      if ((array[0] == array[4] && array[4] == array[8]) || (array[4] == array[2] && array[2] == array[6])) return true
    }
  }

  const reset = () => {
    setArray(base)
    setWinner(false)
    setRound(1)
  }

  useEffect(() => {
    if (victory(round)) {
      setWinner(true)
    }
    else player == 'X' ? setPlayer('O') : setPlayer('X')
  }, [array, round])

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <p>Es el turno de: {player}</p>
      {winner ? <> El ganador es {player}</> : <></>}
      <Table array={array} player={player} handlePlayer={handlePlayer} />
      <div>
        <button onClick={reset}>Reiniciar</button>
      </div>
    </div>
  );
}

export default App;