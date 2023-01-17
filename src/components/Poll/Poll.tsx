import react, {
  FunctionComponent,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'
import { getPlayers } from '../../pages/players'
import { initReducer, reducer } from '../../utils/reducer'
import { InfoBox } from '../InfoBox.tsx/InfoBox'

import style from './Poll.module.scss'

type Partecipants = { creation_timestamp: string; nickname: string }[] | null

function getRandomIntInclusive(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}

export const Poll = ({ names }: { names: any }) => {
  const [partecipants, setPartecipants] = useState<Partecipants>(names)
  const [state, dispatch] = useReducer(reducer, initReducer)

  console.log(names)
  const [winner, setWinner] = useState<string | null>(null)

  useMemo(() => {
    setTimeout(() => {
      const randomNumber = getRandomIntInclusive(1, partecipants?.length ?? 1)
      if (!winner) setWinner(partecipants?.at(randomNumber)?.nickname ?? '')
    }, 2000)
  }, [partecipants])

  // study again setTimeout and setInterval
  // state update is outside the component, and react sees those state variables and pass through the component the snapshot

  return (
    <>
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
      <div>
        <section className={style.slotMachineWrap}>
          <div className={style.slotMachineDisplay}></div>
          <div className={style.slotMachineKeyboard}>
            <div className={style.slotMachineKeyboardFront}></div>
            <div className={style.slotMachineKeyboardBotton}></div>
            <div className={style.slotMachineKeyboardLeft}></div>
            <div className={style.slotMachineKeyboardRight}></div>
          </div>
        </section>
      </div>
      <p>{winner}</p>
    </>
  )
}
