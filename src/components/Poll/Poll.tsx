import react, {
  FunctionComponent,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'
import { getPlayers } from '../../api/players'
import { initReducer, reducer } from '../../utils/reducer'
import { InfoBox } from '../InfoBox.tsx/InfoBox'

import style from './Poll.module.scss'

type Partecipants = { Partecipant: string; Date: string }[] | null

function getRandomIntInclusive(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}

export const Poll: FunctionComponent = () => {
  const [partecipants, setPartecipants] = useState<Partecipants>(null)
  const [state, dispatch] = useReducer(reducer, initReducer)

  const [winner, setWinner] = useState<string | null>(null)

  const getData = async () => {
    try {
      const partecipants = await getPlayers()

      if (partecipants) {
        dispatch({ type: 'set_done' })
        setPartecipants(partecipants)
      }
    } catch (e) {
      dispatch({ type: 'set_error' })
      throw new Error('Cannot get partecipants :(')
    }
  }

  useMemo(() => {
    setTimeout(() => {
      const randomNumber = getRandomIntInclusive(1, partecipants?.length ?? 1)
      if (!winner) setWinner(partecipants?.at(randomNumber)?.Partecipant ?? '')
    }, 2000)
  }, [partecipants])

  // study again setTimeout and setInterval
  // state update is outside the component, and react sees those state variables and pass through the component the snapshot

  useEffect(function fetchPartecipants() {
    if (!partecipants) {
      dispatch({ type: 'set_loading' })
      getData()
    }
  }, [])

  return (
    <>
      <ul>
        {partecipants?.map((p, i) => {
          return <li key={i}>{p.Partecipant}</li>
        })}
      </ul>
      {/* Experiments with */}
      {/* <div className={style.slotMachineWrapper}>
        <div className={style.slotMachineDisplay}>
          <div className={style.slotMachineScreen} />
        </div>
        <div className={style.slotMachineKeyboard}>
          <div className={style.slotMachineKeyboard__left}></div>
          <div className={style.slotMachineKeyboard__right}></div>
        </div>
        <div className={style.slotMachineBorder}></div>
      </div> */}
      <h1 className="hGrande">List of partecipants</h1>
      <section className={style.slotMachine}>
        <div className={style.slotMachineDisplay}></div>
        <div className={style.slotMachineKeyboard}>
          <div className={style.slotMachineKeyboardFront}></div>
          <div className={style.slotMachineKeyboardBotton}></div>
          <div className={style.slotMachineKeyboardLeft}></div>
          <div className={style.slotMachineKeyboardRight}></div>
        </div>
      </section>
      <p>{winner}</p>
      {state.loading && <span>Loading...</span>}
      {state.error && (
        <InfoBox type="error">
          Oh no! I don't know who the players are 😵‍💫{' '}
        </InfoBox>
      )}
    </>
  )
}
