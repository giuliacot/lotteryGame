import style from './Button.module.scss'
import type { ReactElement } from 'react'

export const Button = ({
  type,
  form,
  children,
}: {
  type: 'submit'
  form: string
  children?: ReactElement | string
}) => {
  return (
    <button className={style.button} type={type} form={form}>
      {children}
    </button>
  )
}
