import { useMemo, useReducer, useState } from 'react'
import { initReducer, reducer } from '../../utils/reducer'
import { Button } from '../Button/Button'
import { InfoBox } from '../InfoBox.tsx/InfoBox'

import style from './Poll.module.scss'
import PollLoadingSpinner from '../Loading/PollLoadingSpinner'

type Participants = { creation_timestamp: string; nickname: string }[] | null

function getRandomIntInclusive(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}

export const Poll = ({ names }: { names: any }) => {
  const [participants, setParticipants] = useState<Participants>(names)
  const [state, dispatch] = useReducer(reducer, initReducer)

  const [winner, setWinner] = useState<string | null>(null)
  const [animationOn, setAnimationToggle] = useState(false)

  const PULL_LEVER_DURATION = 1000

  const triggerAnimation = () => {
    setAnimationToggle(true)
    setTimeout(() => {
      setAnimationToggle(false)
      setWinner(null) // reset old winner
    }, PULL_LEVER_DURATION)
  }

  const handlePoll = () => {
    triggerAnimation()
    setTimeout(() => {
      const randomNumber = getRandomIntInclusive(1, participants?.length ?? 1)
      setWinner(participants?.at(randomNumber)?.nickname ?? '')
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

      <div className={style.main}>
        <h1 className="hGrande">Who is the next frontend buddy?</h1>
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
            <p className={style.slotMachineWinner}>
              {animationOn && <PollLoadingSpinner />}
              {winner && !animationOn && (
                <span
                  className={`${
                    !animationOn
                      ? style.slotMachineWinnerName
                      : style.hideWinnerPlayer
                  }`}
                >
                  {winner}
                </span>
              )}
            </p>
          </div>
          <div className={style.slotMachineKeyboard}>
            <div className={style.slotMachineKeyboardFront} />
            <div className={style.slotMachineKeyboardButton} />
            <div className={style.slotMachineKeyboardLeft} />
            <div className={style.slotMachineKeyboardRight} />
          </div>
        </section>
        <Button className={style.drawTheWinner} onClick={() => handlePoll()}>
          Draw the next frontend buddy ✨
        </Button>
      </div>
    </>
  )
}
