import { createContext, useContext, useState, useEffect } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../firebase"

/* creating Context */
const userAuthContext = createContext()

/* Context Provider */
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("")

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function logOut() {
    return signOut(auth)
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleAuthProvider)
  }
  /**
   * Whenever an user is loggedin or created, for this case firebase provide us onchange function "onAuthStateChange"
   * Now, we will be calling the "onAuthStateChange" only once, whenever the component mounts.
   * Also, when the component mounts, then either the user will be null or it has some value.
   * So, we will use state variable [user, setUser] for this case.
   * Also, whenever the component unmount, we don't want to listen the "onAuthStateChange" funtion,
   * For this scenario it return "unsubscribe" function
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn }}>{children}</userAuthContext.Provider>
}

/* Using Context */
export function useUserAuth() {
  return useContext(userAuthContext)
}
