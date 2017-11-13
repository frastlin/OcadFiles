import Wad from 'web-audio-daw'

import s_wind from './sounds/wind.ogg'
import s_water from './sounds/water2.ogg'

export default {
	wind: new Wad({
		source: s_wind
		}),
	water: new Wad({
		source: s_water
		})
}