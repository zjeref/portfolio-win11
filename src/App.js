import Background from "./components/Background";
import Icons from "./components/Icons/Icons";
import ModalTemplate from "./components/Modals/ModalTemplate";
import Taskbar from "./components/Taskbar/Taskbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Background />
      <div className="relative h-full">
        <Icons />
        <ModalTemplate />
      </div>
      <Taskbar />
    </div>
  );
}

export default App;
