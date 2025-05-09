import style from './Button.module.scss'
import type { ReactElement } from 'react'

interface ButtonSpecificProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'submit'
  form?: string
  children?: ReactElement | string
}

export const Button = ({
  type,
  form,
  children,
  className,
  ...props
}: ButtonSpecificProps) => {
  return (
    <button
      className={`${style.button} ${className ?? ''}`}
      type={type}
      form={form}
      {...props}
    >
      {children}
    </button>
  )
}
