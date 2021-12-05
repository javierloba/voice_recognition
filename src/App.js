import './App.css'
import { useState, useEffect } from "react"
import micon from "./img/mic_on.png"
import micoff from "./img/mic_off.png"
import { IconButton, Typography } from "@material-ui/core"
import { NeonButton } from "./components/StyledComponents"
import DisplayNotes from './components/DisplayNotes'

// Inicialización del reconocimiento de voz
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition

// Configuración del reconocimiento de voz
mic.continous = true; // Si es false devuelve todo cuando acabamos
mic.interimResults = true; // Mejora calidad del texto por contexto
mic.lang="es ES"; // Idioma

function App() {
    // Estado para el micrófono, activo o no
    const [isListening, setIslistening] = useState(false)

    // Ahora la funcionalidad del micrófono con useEffect
    useEffect(() => {
        handleListen();
    }, [isListening])

    const handleListen = () => {

    }

    return (
    <>
        <div className="notes">
            <h1>Voice notes</h1>
            <div className="microphone">
                {/* Este lo sacamos de material-ui */}
                <IconButton onClick={()=> setIslistening((prevState => !prevState))}>
                    <img 
                    className="mic-icon" 
                    src={isListening ? micon : micoff} 
                    alt="microphone" 
                    />
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