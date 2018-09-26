class Embed {
	constructor (data = { height: 315, width: 500 }) {
		this.id 	= data.id
		this.target = data.target
		this.source = data.source
		this.width 	= data.width
		this.height = data.height
	}

	embedParser() {
		switch(this.source) {
			//For Security
			case 'youtube':
			case 'dailymotion':
			case 'facebook':
			case 'instagram':
			case 'soundcloud':
			case 'vimeo':
			case 'metacafe':
				return this[this.source](this.id)
			default:
				throw 'There is no such source'
		}
	}

	iframe({src, width, height}) {
		return  `
		<iframe width="${width}" height="${height}" 
		src="${src}" frameborder="0" webkitallowfullscreen 
		mozallowfullscreen allowfullscreen scrolling="no"></iframe>`
	}

	['youtube'](sourceID) {
		return this.iframe({
			src: `https://www.youtube.com/embed/${sourceID}?ecver=1`,
			width: this.width,
			height: this.height
			})
	}

	['facebook'](sourceID) {
		return this.iframe({
			src: `http://www.facebook.com/video/embed?video_id=${sourceID}`,
			width: this.width,
			height: this.height
			})
	}

	['instagram'](sourceID) {
		return this.iframe({
			src: `http://instagram.com/p/${sourceID}/embed`,
			width: this.width,
			height: this.height
			})
	}

	['soundcloud'](sourceID) {
		return this.iframe({
			src: `https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${sourceID}&color=0066c`,
			width: this.width,
			height: this.height
			})
	}

	['vimeo'](sourceID) {
		return this.iframe({
			src: `https://player.vimeo.com/video/${sourceID}?title=0&byline=0&portrait=0`,
			width: this.width,
			height: this.height
			})
	}

	['dailymotion'](sourceID) {
		return this.iframe({
			src: `//www.dailymotion.com/embed/video/${sourceID}`,
			width: this.width,
			height: this.height
			})
	}

	['metacafe'](sourceID) {
		return this.iframe({
			src: `http://www.metacafe.com/embed/${sourceID}/`,
			width: this.width,
			height: this.height
			})
	}

	run() {	
		let videoArea = document.querySelector(this.target)

		if(videoArea) {
			videoArea.innerHTML = this.embedParser()
		} else {
			throw 'Target is not found'
		}
	}

	getEmbedCode() {
		return this.embedParser()
	}
}