import './App.css'
import micon from "./img/mic_on.png"
import micoff from "./img/mic_off.png"
import { IconButton } from "@material-ui/core"

function App() {
  return (
    <>
        <div className="notes">
            <h1>Voice notes</h1>
            <div className="microphone">
                <IconButton>
                    <img className="mic-icon" src={micoff} alt="microphone" />
                </IconButton>
            </div>
        </div>
    </>
  );
}

export default App;