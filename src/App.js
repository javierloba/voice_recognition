import './App.css'
import micon from "./img/mic_on.png"
import micoff from "./img/mic_off.png"
import { IconButton, Typography } from "@material-ui/core"
import { NeonButton } from "./components/StyledComponents"
import DisplayNotes from './components/DisplayNotes'

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
            <Typography variant="h4" component="h2" gutterBottom>
                Texto procesado
            </Typography>
            <DisplayNotes />
        </div>
    </>
  );
}

export default App;