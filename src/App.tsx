import { useEffect, useState } from "react"
import Authentication from "./routes/auth/Authentication";
import Dashboard from "./routes/dashboard/Dashboard";
import { authUser } from "./services/Auth.service";
import { AuthRequestDataI } from './interfaces/Auth';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userUsername, setUserUsername] = useState<string>("");

  useEffect(() => {
    const data: AuthRequestDataI = {
      "username": userUsername,
      "password": "1234567"
    };

    authUser(data)
      .then((data) => {
        setUserUsername(data.username);
        setIsLoggedIn(true);
      })
      .catch(err => console.error(err))
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
