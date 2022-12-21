import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react'
import style from './InfoBox.module.css'

type InfoBoxProps = { type: 'error' | 'warning' | 'info' }
export const InfoBox: FunctionComponent<InfoBoxProps & PropsWithChildren> = ({
  type,
  children,
}) => {
  return (
    <div
      className={style.container}
      style={{
        border: `2px solid ${
          type === 'error' ? 'red' : type === 'warning' ? 'ocra' : 'blue'
        }`,
      }}
    >
      {children}
    </div>
  )
}
