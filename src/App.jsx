import { Outlet } from "react-router-dom"
import { UserAuthContextProvider } from "./context/UserAuthContext"

const style = {
  conatainer: `w-screen h-screen flex justify-center items-center bg-slate-50`
}

function App() {
  return (
    <UserAuthContextProvider>
      <div className={style.conatainer}>
        <Outlet />
      </div>
    </UserAuthContextProvider>
  )
}

export default App
