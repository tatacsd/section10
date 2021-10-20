import React from "react";

// a object that contains a componenent context
// the context store the state of the authentication
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
// export it to wrap and listen to it
