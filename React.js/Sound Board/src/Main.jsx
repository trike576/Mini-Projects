import SoundPads from "./SoundPads";

// sound imports
import sound0 from "./assets/sound0.wav"
import sound1 from "./assets/sound1.wav"
import sound2 from "./assets/sound2.wav"
import sound3 from "./assets/sound3.wav"
import sound4 from "./assets/sound4.wav"
import sound5 from "./assets/sound5.wav"
import sound6 from "./assets/sound6.wav"
import sound7 from "./assets/sound7.wav"
import sound8 from "./assets/sound8.wav"
import sound9 from "./assets/sound9.wav"
import soundW from "./assets/soundW.wav"
import soundA from "./assets/soundA.wav"
import soundS from "./assets/soundS.wav"
import soundD from "./assets/soundD.wav"

export default function Main() {
    function playSound(fileName){
        const sound = new Audio(fileName)
        sound.play()
    }

    window.addEventListener("keydown", (event) => {
        switch(event.key){
            case "0": playSound(sound0)
            break
            case "1": playSound(sound1)
            break
            case "2": playSound(sound2)
            break
            case "3": playSound(sound3)
            break
            case "4": playSound(sound4)
            break
            case "5": playSound(sound5)
            break
            case "6": playSound(sound6)
            break
            case "7": playSound(sound7)
            break
            case "8": playSound(sound8)
            break
            case "9": playSound(sound9)
            break
            case "w": playSound(soundW)
            break
            case "a": playSound(soundA)
            break
            case "s": playSound(soundS)
            break
            case "d": playSound(soundD)
            break
        }
    })
    return (
        <main>
            {SoundPads.map(
                soundPad => (
                    <button
                        key={soundPad.id}
                        style={
                            { backgroundColor: soundPad.backgroundColor}
                        }
                        onClick={() => playSound(soundPad.fileName)}
                    >
                        {soundPad.id}
                    </button>
                )
            )
            }
        </main>
    )
}
