import { AppContext, initialState, reducer } from "./middlewares/app-switch";

import Background from "./components/Background";
import Icons from "./components/Icons/Icons";
import ModalTemplate from "./components/Modals/ModalTemplate";
import Taskbar from "./components/Taskbar/Taskbar";
import { useReducer } from "react";



function App() {
  const [data, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ data: data, dispatch: dispatch }}>
      <div className="min-h-screen flex flex-col overflow-hidden">
        <Background />
        <div className="relative h-full">
          <Icons />
          <ModalTemplate />
        </div>
        <Taskbar />
      </div>
    </AppContext.Provider>
  );
}

export default App;
