import React, { useState } from 'react'

export const RefreshContext = React.createContext();


function RefreshProvider(props) {
  const [refreshMain, setRefreshMain] = useState(0);

  const value = { refreshMain, setRefreshMain };
  return (
    <RefreshContext.Provider value={value}>
      {props.children}
    </RefreshContext.Provider>
  )
}

export default RefreshProvider