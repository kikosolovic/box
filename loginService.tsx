import React, { useState } from "react";
// const [loggedin, Log] = useState(false)
// localStorage.setItem("loggedin",false)
// export function log (){
//     // log(loggedin*-1)
//     val = localStorage.getItem("session")
//     localStorage.setItem("session",val)
// }

export const loginContext = React.createContext({
  loggedin: false,
  log: () => {},
});
