import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faEye, faEyeSlash, faKey, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './SharedLoginRegister.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface RegisterProps {
  username: string
  password: string
  setUsername: (value: string) => void
  setPassword: (value: string) => void
}

function Register({
  username,
  password,
  setPassword,
  setUsername
}: RegisterProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handlerShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Create a new account</p>

      <Input
        className={styles.input}
        label='Username:'
        icon={faUser}
        type='text'
        value={username}
        setValue={setUsername}
      />
      <div className={styles.password_container}>
        <Input
          className={`${styles.input} ${styles.input_password}`}
          label='Password:'
          type={showPassword ? 'text' : 'password'}
          icon={faKey}
          setValue={setPassword}
          value={password}
        />
        <FontAwesomeIcon
          className={styles.password_icon}
          icon={showPassword ? faEye : faEyeSlash}
          onClick={handlerShowPassword}
          size='sm'
        />
      </div>
      <Button
        className={styles.button}
        text='Sign Up'
        icon={faPlus}
      />
    </div>
  )
}

export default Register;