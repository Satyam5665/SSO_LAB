import React, { useState } from "react";
import "./index.css";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, loginWithRedirect, logout, isAuthenticated, isLoading } =
    useAuth0();


  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(user);
  return (
    <>
    <div className="App" style={{}}>
      {isAuthenticated && (
        <button
          style={{
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "10px",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "20px",
            textDecoration: "none",
            outline: "none",
            transition: "all 0.2s ease-in-out",
            ":hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
          onClick={(e) => logout()}
        >
          Logout
        </button>
      )}
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
      {isAuthenticated && <h1> Hello {user.name}</h1>}
      <button
        style={{
          margin: "10px",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: "white",
          color: "black",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "20px",
          textDecoration: "none",
          outline: "none",~
          transition: "all 0.2s ease-in-out",
          ":hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
        onClick={(e) => loginWithRedirect()}
      >
        {" "}
        Login with Redirect
      </button>
    </div>
    </>
  );
}

export default App;
