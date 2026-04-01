import React from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase.init'
 
const AuthProvider = ( {children} ) => {

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        // this means  register will return a promise that is comming from
        // createUserWithEmailAndPassword, to that component which is calling.
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        registerUser,
        signInUser,

    }

  return (
    
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider