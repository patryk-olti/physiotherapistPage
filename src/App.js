import React, { useState } from "react";

import Start from "./sections/Start";
import Offerts from "./sections/Offerts";

import StartAnim from "./containers/animation/startAnim";

function App() {

  const [ active, setActive ] = useState(true);

  return (
    <div className="App">
      
      { active ?
      <>
        <Start />
        <Offerts />
      </>
      :
      <StartAnim handleClick={setActive} />
      }

    </div>
  );
}

export default App;
