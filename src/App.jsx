import { Outlet } from "react-router-dom"

const style = {
  conatainer: `w-screen h-screen flex justify-center items-center bg-slate-50`
}

function App() {
  return (
    <div className={style.conatainer}>
      <Outlet />
    </div>
  )
}

export default App
