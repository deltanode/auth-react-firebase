import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Home from "./components/Home"
const style = {
  conatainer: ``
}

function App() {
  return (
    <div className="bg-slate-100">
      <Signin />
      <Signup />
      <Home />
    </div>
  )
}

export default App
