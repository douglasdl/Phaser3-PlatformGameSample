import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import SampleScene from './scenes/SampleScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: true,
		}
	},
	scene: [SampleScene]
}

export default new Phaser.Game(config)
