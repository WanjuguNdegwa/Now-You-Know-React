import {auth, signOut} from '../firebase'

const SignOut = () => {
  return (
    auth.currentUser && <button className="btn btn-warning" onClick={signOut}>Log out</button>
  )
}

export default SignOut