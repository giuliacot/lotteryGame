import { FormEvent, useEffect, useReducer, useState } from 'react'
import { addPlayers } from '../../api/players'
import { InfoBox } from '../InfoBox.tsx/InfoBox'
import { initReducer, reducer } from '../../utils/reducer'

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

  if (state.error) {
    return <InfoBox type="error">Oh no! I can't add your name :( </InfoBox>
  }

  if (state.done) {
    return <InfoBox type="info">Well done and thanks to partecipate!</InfoBox>
  }

  if (state.loading) {
    return <span>Loading...</span>
  }

  return (
    <form id="getNickname" onSubmit={handleSubmit}>
      <label>Your nickname</label>
      <input type="text" placeholder="Your nickname" name="nickname" />
      <button type="submit" form="getNickname">
        Let's play!
      </button>
    </form>
  )
}
