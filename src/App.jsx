import ChangeName from "./components/ChangeName";
import Counter from "./components/Counter";
import StatusToggle from "./components/StatusToggle";
import UpdateAge from "./components/UpdateAge";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <div>
    <Counter/>
    <StatusToggle/>
    <ChangeName/>
    <UpdateAge/>
    <UpdateProfile/>
    </div>
  );
}

export default App;