import { FormEvent, useEffect, useState } from 'react'
import { addPlayers } from '../../pages/players'

export const Player = () => {
  const [nickname, setNickname] = useState<FormDataEntryValue>()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formPartecipant = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    )
    setNickname(formPartecipant.nickname)
  }

  useEffect(() => {
    if (nickname && typeof nickname === 'string') {
      const addsData = async () => {
        const data = await addPlayers({
          Partecipant: nickname,
          Date: new Date(),
        })
        console.log(data)
      }
      addsData()
    }
  }, [nickname])

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
