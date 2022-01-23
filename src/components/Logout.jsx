import React from "react";
import { useGoogleLogout } from "react-google-login";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const clientId =
  "907542318272-1g801951fo18ic65g0et2qhceggc76ms.apps.googleusercontent.com";

export const Logout = () => {
  const navigate = useNavigate();
  const onLogoutSuccess = (res) => {
    console.log("Logged out Successfully ");
    alert("Logged out Successfully ✌");
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <div className="googleLogin">
      <button
        onClick={() => {
          // signOut();
          navigate(-1);
        }}
        className="button"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
          alt="google login"
          className="icon"
        ></img>

        <span className="buttonText">Sign out</span>
      </button>
    </div>
  );
};
