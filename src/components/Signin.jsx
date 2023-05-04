import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"

const style = {
  section: `m-2 p-2 `,
  loginBox: `bg-white mb-2 border p-6 flex flex-col gap-2`,
  h2: `text-2xl font-medium`,
  form: `my-2 flex flex-col gap-3`,
  label: `bg-red-200 text-red-800 border border-red-300 p-2 text-center`,
  input: `border p-2`,
  button: `bg-blue-500 text-white p-2`,
  googleButton: `bg-blue-500 text-white p-0.5 mt-2 flex justify-stretch items-center`,
  googleIcon: `p-3 bg-white`,
  googleText: `text-center p-1 grow`,
  signupLink: `bg-white border p-4 text-center`,
  link: `underline text-blue-800`
}

const Signin = () => {
  return (
    <section className={style.section}>
      <div className={style.loginBox}>
        <h2 className={style.h2}>Firebase Auth Login</h2>

        <form action="" className={style.form}>
          <label htmlFor="" hidden className={style.label}>
            Error
          </label>
          <input type="text" placeholder="Email address" className={style.input} />
          <input type="password" placeholder="Password" className={style.input} />
          <button className={style.button}>Log In</button>
        </form>

        <hr />
        <button className={style.googleButton}>
          <div className={style.googleIcon}>
            <FcGoogle />
          </div>
          <div className={style.googleText}>Sign in with Google</div>
        </button>
      </div>

      <div className={style.signupLink}>
        Don't have an account?{" "}
        <Link to="register" className={style.link}>
          Sign up
        </Link>
        <Link to="home" className={style.link}>
          Home
        </Link>
      </div>
    </section>
  )
}

export default Signin
