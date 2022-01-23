import { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import "./Login.css";
import { useNavigate } from "react-router-dom";

// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "907542318272-1g801951fo18ic65g0et2qhceggc76ms.apps.googleusercontent.com";

export const Login = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [token, setToken] = useState("");
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    console.log("Login Success: currentUser:", res.givenName);

    alert(`Logged in successfully`);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });
  console.log("Token:", token);
  return (
    <div className="Container">
      <div className="googleLogin">
        <button onClick={signIn} className="button">
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="google login"
            className="icon"
          ></img>

          <span className="buttonText">Sign in with Google</span>
        </button>
        {/* login with Email  */}
      </div>
      <br />
      <div className="googleLogin">
        <button onClick={signIn} className="button">
          <img
            src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/344/external-email-interface-kiranshastry-lineal-color-kiranshastry-1.png"
            alt="Email login"
            className="icon"
          ></img>

          <span className="buttonText"> Continue with Email</span>
        </button>
      </div>
      <br />
      {/* login with Apple  */}
      <div className="googleLogin">
        <button
          onClick={() => {
            signIn();
            navigate(-1);
          }}
          className="button"
        >
          <img
            src="https://img.icons8.com/ios-filled/344/mac-os.png"
            alt="Apple login"
            className="icon"
          ></img>

          <span className="buttonText">Continue with Apple </span>
        </button>
      </div>
      <h2 className="text-center my-2"> OR</h2>
      <div className="loginWithNumber">
        <div>
          <img
            width="20px"
            src="https://cdn-icons-png.flaticon.com/512/330/330439.png"
            alt="flag"
          />
          +91
        </div>

        <input
          className="mobile"
          type=" number"
          placeholder="Continue with Mobile Number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <br />
      <button
        className="ContinueBTn"
        onClick={() => {
          setToken(Date.now());
          navigate(-1);
        }}
      >
        {" "}
        Continue
      </button>
    </div>
  );
};
