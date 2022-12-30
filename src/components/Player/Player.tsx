import { FormEvent, useEffect, useReducer, useState } from 'react'
import { addPlayers } from '../../api/players'
import { InfoBox } from '../InfoBox.tsx/InfoBox'
import { initReducer, reducer } from '../../utils/reducer'
import style from './Player.module.scss'
import { InputWithLabel } from '../InputWithLabel/InputWithLabel'
import { Button } from '../Button/Button'

export const Player = () => {
  const [state, dispatch] = useReducer(reducer, initReducer)

  const setPlayers = async (nickname: string) => {
    try {
      const r = await addPlayers({
        Partecipant: nickname,
        Date: new Date(),
      })
      if (r && r.hasOwnProperty('data')) {
        dispatch({ type: 'set_done' })
      }
    } catch (e) {
      console.error(e)
      dispatch({ type: 'set_error' })
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // why errorboundary doensn't catch on event handler https://stackoverflow.com/questions/58809160/errorboundary-not-catching-error-thrown-by-imported-function
    event.preventDefault()
    const formPartecipant = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    )

    if (typeof formPartecipant.nickname === 'string') {
      setPlayers(formPartecipant.nickname)
      dispatch({ type: 'set_loading' })
    }
  }

  if (state.done) {
    return <InfoBox type="info">Well done and thanks to partecipate!</InfoBox>
  }

  return (
    <div>
      <h1 className="hGrande">Insert your funniest nickname</h1>
      {state.loading ? (
        <span>Loading...</span>
      ) : (
        <form
          className={style.nicknameForm}
          id="getNickname"
          onSubmit={handleSubmit}
        >
          <InputWithLabel.Label labelFor="nickname">
            Nickname
          </InputWithLabel.Label>
          <InputWithLabel.Input
            id="nickname"
            placeholder="Your nickname"
            name="nickname"
          />

          <Button type="submit" form="getNickname">
            Let's play!
          </Button>
        </form>
      )}

      {state.error && (
        <InfoBox type="error">Oh no! I can't add your name :( </InfoBox>
      )}
    </div>
  )
}
