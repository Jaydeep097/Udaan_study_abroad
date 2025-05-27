import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  
    <Auth0Provider
      domain="dev-u001.us.auth0.com"
      clientId="J7vaCJoybApj7A0f1cQKWyYJwOoYrrAW"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Navbar />
      <App />
      {/* <Footer/> */}
    </Auth0Provider>
  
);
