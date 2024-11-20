import { useState } from "react";

import App from "./App";
import { AppContex } from "./contex/AppContex";

const AppContainer = () => {
  const [user, setUser] = useState(undefined);

  return (
    <AppContex.Provider value={{user, setUser}}>
      <App />
    </AppContex.Provider>
  );
};

export default AppContainer;
