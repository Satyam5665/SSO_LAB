import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { Auth0Provider } from "@auth0/auth0-react";
import Header from "./Header.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <> 
    <Header/>
    <Auth0Provider
      domain="dev-tntfkcexkrmu12le.us.auth0.com"
      clientId="qitHeBtXvKbXwYu4eFBeWEifICBEV7dt"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </>
);
