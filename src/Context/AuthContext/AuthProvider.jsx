import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase.init'

const googleProvider = new GoogleAuthProvider()
// it is outside of the AutthProvider component caause on re-rendering that component
//   googleProvider will not be rendered oftenlt..

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log('first', user)

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        // this means  register will return a promise that is comming from
        // createUserWithEmailAndPassword, to that component which is calling.
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

            if (user) {
                console.log('there is user..', user)
                // Because[] means "run this effect only once, never re-run it".
                // When the effect never re - runs, the callback is never recreated.And since the callback is never recreated, it always holds onto the old user = null it got on mount.
            }
            else {
                console.log('there is no user..', user)
            }

            {currentUser ? console.log('user exist') : console.log('user doesnt exist')}
        })

        return () => {
            unSubscribe()
        }
        
    }, [])
    // Empty dependency array means:
    // This runs only once when the component mounts (first time loads).
    // Adding [user] means: “Run this useEffect every time user changes”. Every time user changes, you are doing this: onAuthStateChanged(...) That means: You are creating a NEW Firebase listener again and again.

    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        googleUser,
        logOutUser,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider
