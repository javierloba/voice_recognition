import './App.css'
import { useState, useEffect } from "react"
import micon from "./img/mic_on.png"
import micoff from "./img/mic_off.png"
import { IconButton, Typography } from "@material-ui/core"
import { NeonButton } from "./components/StyledComponents"
import DisplayNotes from './components/DisplayNotes'

// Inicialización del reconocimiento de voz
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

// Configuración del reconocimiento de voz
mic.continous = true; // Si es false devuelve todo cuando acabamos
mic.interimResults = true; // Mejora calidad del texto por contexto
mic.lang="es-ES"; // Idioma

function App() {
    
    const [isListening, setIslistening] = useState(false)

    const [note, setNote] = useState(null)

    const [savedNotestodo, setSavedNotestodo] = useState([]);
    const [savedNotesinprocess, setSavedNotesinprocess] = useState([]);
    const [savedNotesdone, setSavedNotesdone] = useState([]);

    const savedNotes = [
        {
            group: "todo",
            name: savedNotestodo,
        }, {
            group: "inprocess",
            name: savedNotesinprocess,
        }, {
            group: "done",
            name: savedNotesdone,
        }
    ]

    // Ahora la funcionalidad del micrófono con useEffect
    useEffect(() => {
        handleListen();
    }, [isListening])

    // En esta función va a ir toda la lógica del micro
    const handleListen = () => {
        if(isListening) {
            mic.start();
            mic.onend = () => {
                console.log("continue...")
                mic.start()
            }
        } else {
            mic.stop();
            mic.onend = () => {
                console.log("Stopped the microphone on Click")
            }
        }

        mic.onstart = () => {
            console.log("Microphone is on");
        }

        mic.onresult = (event) => {
            const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript).join("");
            console.log(transcript)
            setNote(transcript)
            mic.onerror = (event) => console.log(event.error)
        }
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

            <div>
                {/* Este lo creamos con styled components */}
                <NeonButton status="todo" disabled={!note} onClick={() => {
                    setSavedNotestodo([...savedNotestodo, note])
                    setNote("")
                }}>
                    To do
                </NeonButton>
                <NeonButton status="inprocess" disabled={!note} onClick={() => {
                    setSavedNotesinprocess([...savedNotesinprocess, note])
                    setNote("")
                }}>
                    In process
                </NeonButton>
                <NeonButton status="done" disabled={!note} onClick={() => {
                    setSavedNotesdone([...savedNotesdone, note])
                    setNote("")
                }}>
                    Done
                </NeonButton>
            </div>
            
            <Typography variant="h4" component="h2" gutterBottom>
                {console.log(savedNotes)}
                {note}
            </Typography>
            <DisplayNotes data={ savedNotes } />
        </div>
    </>
    );
}

export default App;