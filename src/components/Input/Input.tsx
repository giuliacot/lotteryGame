import style from './Input.module.scss'
export const Input: React.FC<{ placeholder: string; name: string }> = ({
  placeholder,
  name,
}) => {
  return (
    <input
      className={style.input}
      type="text"
      placeholder={placeholder}
      name={name}
    />
  )
}
