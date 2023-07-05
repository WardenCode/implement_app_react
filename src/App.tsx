import { useEffect, useState } from "react"
import { faKey } from '@fortawesome/free-solid-svg-icons'
import Input from "./components/general/Input"
import SelectInput from "./components/general/SelectInput";
import Button from "./components/general/Button";
import SearchBar from "./components/general/SearchBar";
import styles from "./App.module.css";
import axios, { AxiosError } from "axios";
import environments from "./environments";
import Authentication from "./routes/auth/Authentication";
import Dashboard from "./routes/dashboard/Dashboard";

interface AuthResponse {
  userId: number
  username: string
}

function handleAxiosError(error: AxiosError) {
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
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userUsername, setUserUsername] = useState<string>("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    const data = {
      "username": userUsername,
      "password": "1234567"
    };

    const headers = {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    axios.post<AuthResponse>(`${environments.API_URL}/auth`, data, { headers })
      .then((response) => response.data)
      .then((data) => {
        setUserUsername(data.username);
        setIsLoggedIn(true);
      })
      .catch(handleAxiosError);

  }, []);

  return (
    isLoggedIn
      ? <Dashboard
        setIsLoggedIn={setIsLoggedIn}
        userUsername={userUsername}
      />
      : <Authentication
        setIsLoggedIn={setIsLoggedIn}
        setUserUsername={setUserUsername}
      />
  );
}

export default App
