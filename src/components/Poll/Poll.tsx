import react, {
  FunctionComponent,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { getPlayers } from '../../api/players'
import { initReducer, reducer } from '../../utils/reducer'
import { InfoBox } from '../InfoBox.tsx/InfoBox'

type Partecipants = { Partecipant: string; Date: string }[] | null

export const Poll: FunctionComponent = () => {
  const [partecipants, setPartecipants] = useState<Partecipants>(null)
  const [state, dispatch] = useReducer(reducer, initReducer)

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

  useEffect(() => {
    if (!partecipants) {
      dispatch({ type: 'set_loading' })
      getData()
    }
  }, [])

  return (
    <>
      {state.loading && <span>Loading...</span>}
      {state.error && (
        <InfoBox type="error">
          Oh no! I don't know who are the players :({' '}
        </InfoBox>
      )}
      <ul>
        {partecipants?.map((p, i) => {
          return <li key={i}>{p.Partecipant}</li>
        })}
      </ul>
    </>
  )
}
