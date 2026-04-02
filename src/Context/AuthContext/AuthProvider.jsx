import React, { useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/firebase.init'

const googleProvider = new GoogleAuthProvider()
// it is outside of the AutthProvider component caause on re-rendering that component
//   googleProvider will not be rendered oftenlt..
 
const AuthProvider = ( {children} ) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        // this means  register will return a promise that is comming from
        // createUserWithEmailAndPassword, to that component which is calling.
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleUser = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        googleUser,
    }

  return (
    
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider