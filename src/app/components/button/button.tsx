'use client';
import Styles from './button.module.scss'

const Button = (props: {
  onClick: () => void,
  type: 'primary' | 'secondary' | 'tertiary' | 'cancel',
  children: React.ReactNode,
}) => {
  const {onClick, type = 'primary', children} = props;

  return (
    <button
      className={`
        ${Styles.button}
        ${type === 'primary' ? Styles.primary : ""}
        ${type === 'secondary' ? Styles.secondary : ""}
        ${type === 'tertiary' ? Styles.tertiary : ""}
        ${type === 'cancel' ? Styles.cancel : ""}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button