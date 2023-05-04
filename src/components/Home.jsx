import React from "react"

const style = {
  section: `bg-white w-72 text-center border flex flex-col `,
  text: `p-6 text-gray-800`,
  button: `bg-blue-500 text-white p-2`
}

const Home = ({ emailId }) => {
  emailId = "text1234@gmail.com"
  return (
    <section className={style.section}>
      <div className={style.text}>
        Hello Welcome, <br /> {emailId}
      </div>
      <button className={style.button}>Logout</button>
    </section>
  )
}

export default Home
