import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react'

type InfoBoxProps = { type: 'error' | 'warning' | 'info' }
export const InfoBox: FunctionComponent<InfoBoxProps & PropsWithChildren> = ({
  type,
  children,
}) => {
  return (
    <div
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
