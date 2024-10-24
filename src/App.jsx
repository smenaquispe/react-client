import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import Profile from "./components/Profile"
import ButtonAccessToResources from "./components/ButtonAccessToResources"
import { LoginButtonWithPassport } from "./components/LoginButtonWithPassport"

function App() {

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <ButtonAccessToResources />

      <LoginButtonWithPassport />
    </>
  )
}

export default App
