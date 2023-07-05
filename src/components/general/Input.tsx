import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeEvent, InputHTMLAttributes } from "react";
import '../../../general.css';
import styles from './Input.module.css';

interface InputProps {
  label: string,
  type: string,
  value: any,
  setValue: (value: any) => void,
  className?: string,
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>,
  error?: boolean,
  dark?: boolean
  icon?: IconProp,
}

function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  error = false,
  dark = false,
  inputAttributes,
}: InputProps) {

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return (
    <div className={`${styles.container} ${dark && styles.container_dark} ${className}`}>
      <div className={styles.description_container}>
        {icon &&
          <FontAwesomeIcon
            icon={icon}
            className={error ? styles.icon_error : styles.icon} />
        }
        <label className={error ? styles.label_error : ''}>{label}</label>
      </div>
      <input
        className={`${styles.input} ${dark && styles.input_dark} ${error && styles.input_error}`}
        type={type}
        value={value}
        onChange={handleInput}
        {...inputAttributes}
      />
      {error && <span className={styles.error_message}>Error Message</span>}
    </div>
  )
}

export default Input;