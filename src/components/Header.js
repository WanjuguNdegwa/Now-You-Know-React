import WeatherWidget from "./WeatherWidget";
import SignIn from "./SignIn";
import "./Header.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import SignOut from './SignOut';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className="header">
      <WeatherWidget />
      <h1>Now You Know</h1>
      {user ? <div> {user.email} <SignOut /></div> : <SignIn isDisabled={loading} />}
    </header>
  );
};

export default Header;
