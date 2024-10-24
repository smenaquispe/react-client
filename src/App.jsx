import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import Profile from "./components/Profile"
import ButtonAccessToResources from "./components/ButtonAccessToResources"
import { LoginButtonWithPassport } from "./components/LoginButtonWithPassport"
import { LogoutButtonWithPassport } from "./components/LogoutButtonWithPassport"
import { ProfileWithPassport } from "./components/ProfileWithPassport"

function App() {

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <ButtonAccessToResources />
      <hr />
      <LoginButtonWithPassport />
      <LogoutButtonWithPassport />
      <ProfileWithPassport />
    </>
  )
}

export default App
