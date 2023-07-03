import { ChangeEvent } from "react";
import styles from "./SelectInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface SelectInputProps {
  label: string,
  options: string[],
  multiple: boolean,
  className: string,
  value: any,
  setValue: (value: any) => void,
}

function SelectInput({
  className,
  label,
  multiple,
  options,
  setValue,
  value
}: SelectInputProps) {

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <label className={styles.label}>{label}</label>
      <div className={styles.select_container}>
        <select
          className={styles.select_input}
          value={value}
          onChange={handleSelect}
          multiple={multiple}
        >
          {options.map(option => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="xs"
          className={styles.select_icon}
        />
      </div>
    </div>
  )
};

export default SelectInput;