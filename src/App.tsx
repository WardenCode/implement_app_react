import { useEffect, useState } from "react"
import { faKey } from '@fortawesome/free-solid-svg-icons'
import Input from "./components/general/Input"
import SelectInput from "./components/general/SelectInput";
import Button from "./components/general/Button";
import SearchBar from "./components/general/SearchBar";
import styles from "./App.module.css";
import axios from "axios";
import envionments from "./environments";

interface AuthResponse {
  userId: number
  username: string
}


function App() {
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);
  const [userUsername, setuserUsername] = useState<string>("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    const data = {
      "username": "foo",
      "password": "1234567"
    };

    const headers = {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    axios.post<AuthResponse>(`${envionments.API_URL}/auth`, data, { headers })
      .then((response) => {
        console.log(response);
        setuserUsername(response.data.username);
        setisLoggedIn(true);
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

  }, []);

  return (isLoggedIn ? <p>Dashboard</p> : <p>Auth Page</p>);
}

export default App
