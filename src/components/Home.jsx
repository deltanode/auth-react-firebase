import React from "react"
import { useUserAuth } from "../context/UserAuthContext"

const style = {
  section: `bg-white w-72 text-center border flex flex-col `,
  text: `p-6 text-gray-800`,
  button: `bg-blue-500 text-white p-2`
}

const Home = ({ emailId }) => {
  const { user, logOut } = useUserAuth()
  // console.log(user)
  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <section className={style.section}>
      <div className={style.text}>
        Hello Welcome, <br /> {user.email}
      </div>
      <button className={style.button} onClick={handleLogOut}>
        Logout
      </button>
    </section>
  )
}

export default Home
