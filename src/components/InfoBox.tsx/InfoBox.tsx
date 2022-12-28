import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react'
import style from './InfoBox.module.scss'

type InfoBoxProps = { type: 'error' | 'warning' | 'info' }
export const InfoBox: FunctionComponent<InfoBoxProps & PropsWithChildren> = ({
  type,
  children,
}) => {
  return (
    <div
      className={`${style.container} ${
        type === 'error'
          ? style.error
          : type === 'warning'
          ? style.warning
          : style.info
      }`}
    >
      {children}
    </div>
  )
}
