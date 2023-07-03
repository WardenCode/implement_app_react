import { FormEvent, useState } from "react";
import Button from '../../components/general/Button';
import styles from './Authentication.module.css'
import Login from './Login';
import Register from "./Register";
import axios from "axios";
import envionments from "../../environments";

interface AuthenticationProps {
  setIsLoggedIn: (value: boolean) => void;
  setUserUsername: (value: string) => void;
}

interface AuthResponse {
  message: string
  accessToken: string
}

function Authentication({
  setIsLoggedIn,
  setUserUsername
}: AuthenticationProps) {
  const [_switch, set_switch] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const baseUrl = `${envionments.API_URL}/auth${_switch ? '/login' : '/register'}`;

    const data = {
      username,
      password
    };

    axios.post<AuthResponse>(baseUrl, data)
      .then((response) => response.data)
      .then((data) => {
        const { accessToken } = data;
        localStorage.setItem('accessToken', accessToken);
        setUserUsername(username);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  function handleSwitch(state: boolean) {
    if (_switch !== state) {
      setUsername("")
      setPassword("")
    }
    set_switch(state)
  }

  return (
    <div className={styles.container}>
      <Button
        className={`${styles.switch_button} ${_switch && styles.selected}`}
        onClick={() => handleSwitch(true)}
        text="Sign In"
      />
      <Button
        className={`${styles.switch_button} ${!_switch && styles.selected}`}
        onClick={() => handleSwitch(false)}
        text="Sign Up"
      />
      <form onSubmit={handleSubmit}>
        {
          _switch
            ? <Login
              password={password}
              setPassword={setPassword}
              username={username}
              setUsername={setUsername}
            />
            : <Register
              password={password}
              setPassword={setPassword}
              username={username}
              setUsername={setUsername}
            />
        }
      </form>
    </div>
  );
}

export default Authentication;