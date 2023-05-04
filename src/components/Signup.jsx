import { Link } from "react-router-dom"

const style = {
  section: `m-2 p-2 `,
  signupBox: `bg-white mb-2 border p-6 flex flex-col gap-2`,
  h2: `text-2xl font-medium`,
  form: `my-2 flex flex-col gap-3`,
  label: `bg-red-200 text-red-800 border border-red-300 p-2 text-center`,
  input: `border p-2`,
  button: `bg-blue-500 text-white p-2`,
  signupLink: `bg-white border p-4 text-center`,
  link: `underline text-blue-800`
}

const Signup = () => {
  return (
    <section className={style.section}>
      <div className={style.signupBox}>
        <h2 className={style.h2}>Firebase Auth Signup</h2>

        <form action="" className={style.form}>
          <label htmlFor="" hidden className={style.label}>
            Error
          </label>
          <input type="text" placeholder="Email address" className={style.input} />
          <input type="password" placeholder="Password" className={style.input} />
          <button className={style.button}>Log In</button>
        </form>
      </div>

      <div className={style.signupLink}>
        Already have an account?{" "}
        <Link to="/" className={style.link}>
          Log In
        </Link>
      </div>
    </section>
  )
}

export default Signup
