import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MouseEvent } from "react"
import styles from './Button.module.css'

interface ButtonProps {
  text: string
  className: string
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  icon?: IconProp
}

function Button({
  className,
  onClick,
  text,
  icon
}: ButtonProps) {
  return (
    <button
      className={`${className} ${styles.button}`}
      onClick={onClick}
    >
      {
        icon &&
        <FontAwesomeIcon
          className={styles.icon}
          icon={icon}
        />
      }
      {text}
    </button>
  )
}

export default Button;
