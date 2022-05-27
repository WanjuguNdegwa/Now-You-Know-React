import React from 'react'
import { signInWithGoogle } from '../firebase'

import { FcGoogle } from 'react-icons/fc'

const SignIn = ({isDisabled}) => {
  return (
    <button className="btn btn-light" disabled={isDisabled} onClick={signInWithGoogle}>
      <FcGoogle /> Sign in with Google
    </button>
  )
}

export default SignIn