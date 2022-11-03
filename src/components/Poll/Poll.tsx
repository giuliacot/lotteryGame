import react, { FunctionComponent, useEffect, useState } from 'react'
import { getPlayers } from '../../pages/players'

type Partecipants = { Partecipant: string; Date: string }[] | null

export const Poll: FunctionComponent = () => {
  const [partecipants, setPartecipants] = useState<Partecipants>(null)

  useEffect(() => {
    if (!partecipants) {
      const getData = async () => {
        const partecipants = await getPlayers()
        setPartecipants(partecipants)
      }
      getData()
    }
  }, [])

  return (
    <>
      <h1>List of partecipants</h1>
      <ul>
        {partecipants?.map((p, i) => {
          return <li key={i}>{p.Partecipant}</li>
        })}
      </ul>
    </>
  )
}
