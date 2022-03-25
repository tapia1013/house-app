import React, { useEffect, useState, useRef } from 'react'
// everytime loggedin changes to true or false onAuthSC fires off
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  // checkingStatus is like loading
  const [checkingStatus, setCheckingStatus] = useState(true);
  //useRef for memory leak
  const isMounted = useRef(true);


  useEffect(() => {
    // only do this if isMounted is true cause of memory leak
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true)
        }
        setCheckingStatus(false)
      })
    }

    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  return { loggedIn, checkingStatus }
}