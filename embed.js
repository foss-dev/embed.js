class Embed {
	constructor (data = { height: 315, width: 500 }) {
		this.id 	= data.id
		this.target = data.target
		this.source = data.source
		this.width 	= data.width
		this.height = data.height
	}

	getEmbed() {
		switch(this.source) {
			case 'youtube':
				return this.createEmbed({
					src: `https://www.youtube.com/embed/${this.id}?ecver=1`
				})

			case 'dailymotion':
				return this.createEmbed({
					src: `https://www.dailymotion.com/embed/video/${this.id}`
				})

			case 'facebook':
				return this.createEmbed({
					src: `http://www.facebook.com/video/embed?video_id=${this.id}`
				})

			case 'instagram':
				return this.createEmbed({
					src: `http://instagram.com/p/${this.id}/embed`
				})

			case 'soundcloud':
				return this.createEmbed({
					src: `https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${this.id}&color=0066c`
				})

			case 'vimeo':
				return this.createEmbed({
					src: `https://player.vimeo.com/video/${this.id}?title=0&byline=0&portrait=0`
				})

			case 'metacafe':
				return this.createEmbed({
					src: `http://www.metacafe.com/embed/${this.id}/`
				})

			default:
				throw 'There is no such source'
		}
	}

	createEmbed({src, width = this.width, height = this.height}) {
		let iframe = document.createElement('iframe')
			iframe.src = src
			iframe.width = width
			iframe.height = height
			iframe.frameBorder = 0
			iframe.scrolling = 'no'

			iframe.setAttribute('webkitallowfullscreen', '')
			iframe.setAttribute('mozallowfullscreen', '')
			iframe.setAttribute('allowfullscreen', '')

		return iframe
	}

	run() {	
		let videoArea = document.querySelector(this.target)

		if(videoArea) {
			videoArea.appendChild(this.getEmbed())
		} else {
			throw 'Target is not found'
		}
	}
}