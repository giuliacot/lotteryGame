import { useMemo, useReducer, useState } from 'react'
import { initReducer, reducer } from '../../utils/reducer'
import { Button } from '../Button/Button'
import { InfoBox } from '../InfoBox.tsx/InfoBox'

import style from './Poll.module.scss'

type Partecipants = { creation_timestamp: string; nickname: string }[] | null

function getRandomIntInclusive(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}

export const Poll = ({ names }: { names: any }) => {
  const [partecipants, setPartecipants] = useState<Partecipants>(names)
  const [state, dispatch] = useReducer(reducer, initReducer)

  const [winner, setWinner] = useState<string | null>(null)
  const [animationOn, setAnimationToggle] = useState(false)

  const PULL_LEVER_DURATION = 1000

  const triggerAnimation = () => {
    setAnimationToggle(true)
    setTimeout(() => {
      setAnimationToggle(false)
    }, PULL_LEVER_DURATION)
  }

  const handlePoll = () => {
    triggerAnimation()
    setTimeout(() => {
      const randomNumber = getRandomIntInclusive(1, partecipants?.length ?? 1)
      setWinner(partecipants?.at(randomNumber)?.nickname ?? '')
    }, 2000)
  }

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
          <div className={style.slotMachineDisplay}>
            <div className={style.slotMachineLever}>
              <div className={style.slotMachineLeverHandle}>
                <div
                  className={
                    animationOn
                      ? `${style.slotMachineLeverStick} ${style.animationLever}`
                      : `${style.slotMachineLeverStick}`
                  }
                />
              </div>
            </div>
          </div>
          <div className={style.slotMachineScreen}>
            <p className={style.slotMachineWinner}>{winner}</p>
          </div>
          <div className={style.slotMachineKeyboard}>
            <div className={style.slotMachineKeyboardFront} />
            <div className={style.slotMachineKeyboardBotton} />
            <div className={style.slotMachineKeyboardLeft} />
            <div className={style.slotMachineKeyboardRight} />
          </div>
        </section>
      </div>
      <Button onClick={() => handlePoll()}>Start raffle off ✨</Button>
    </>
  )
}
