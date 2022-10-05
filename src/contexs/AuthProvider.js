import React, { useState } from 'react'

export const AuthContext = React.createContext();


function AuthProvider(props) {
  const [isLogged, setIsLogged] = useState(() => false);
  const AuthContextData = { isLogged, setIsLogged };
  return (
    <AuthContext.Provider value={AuthContextData}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider