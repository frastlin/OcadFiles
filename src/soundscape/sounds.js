import Wad from 'web-audio-daw'

//imported sounds
import HELLO from './sounds/hello.mp3'

let sounds = {
'hello': new Wad({
	source: HELLO,
	panningModel: 'HRTF',
	panning: [0, 0, 0]
})
}

export default sounds