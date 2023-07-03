import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './Button.module.css'

interface ButtonProps {
  text: string
  onClick?: () => void
  className?: string
  icon?: IconProp
}

function Button({
  text,
  onClick,
  className,
  icon
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${className} `}
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
