import './App.css'
import micon from "./img/mic_on.png"
import micoff from "./img/mic_off.png"
import { IconButton } from "@material-ui/core"
import { NeonButton } from "./components/StyledComponents"

function App() {
  return (
    <>
        <div className="notes">
            <h1>Voice notes</h1>
            <div className="microphone">
                {/* Este lo sacamos de material-ui */}
                <IconButton>
                    <img className="mic-icon" src={micoff} alt="microphone" />
                </IconButton>
            </div>
            {/* Este lo creamos con styled components */}
            <NeonButton status="todo">
                To do
            </NeonButton>
            <NeonButton status="inprocess">
                In process
            </NeonButton>
            <NeonButton status="done">
                Done
            </NeonButton>
        </div>
    </>
  );
}

export default App;