class Embed {
	constructor (data = { height: 315, width: 500 }) {
		this.id 	= data.id
		this.target = data.target
		this.source = data.source
		this.width 	= data.width
		this.height = data.height
		this.iframeOptions = `
							frameborder="0" 
							webkitallowfullscreen 
							mozallowfullscreen 
							allowfullscreen
							scrolling="no"`
	}

	['embedParser']() {
		let source = this.source
		let id	   = this.id

		switch(source) {
			//For Security
			case 'youtube':
			case 'dailymotion':
			case 'facebook':
			case 'instagram':
			case 'soundcloud':
			case 'vimeo':
			case 'metacafe':
				return this[source](id)
			default:
				throw 'There is no such source'

		}
	}

	['youtube'](sourceID) {
		let videoembed = `
			<iframe width="${this.width}" height="${this.height}" 
			src="https://www.youtube.com/embed/${sourceID}?ecver=1" 
			${this.iframeOptions}></iframe>`
		
		return videoembed
	}

	['facebook'](sourceID) {
		let videoembed = `
			<iframe src="http://www.facebook.com/video/embed?video_id=${sourceID}" 
			width="${this.width}" height="${this.height}" ${this.iframeOptions}>`
		
		return videoembed
	}

	['instagram'](sourceID) {
		let videoembed = `
			<iframe 
			width="${this.width}" 
			height="${this.height}" 
			src="http://instagram.com/p/${sourceID}/embed" 
			${this.iframeOptions}></iframe>`
		
		return videoembed
	}

	['soundcloud'](sourceID) {
		let videoembed = `
			<iframe 
			width="${this.width}" 
			height="${this.height}" 
			src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${sourceID}&color=0066c" 
			${this.iframeOptions}></iframe>`
		
		return videoembed
	}

	['vimeo'](sourceID) {
		let videoembed = `
			<iframe 
			src="https://player.vimeo.com/video/${sourceID}?title=0&byline=0&portrait=0& 
			width="${this.width}" 
			height="${this.height}" 
			${this.iframeOptions}></iframe>`
		
		return videoembed
	}

	['dailymotion'](sourceID) {
		let videoembed = `
		<iframe width="${this.width}" height="${this.height}" 
		src="//www.dailymotion.com/embed/video/${sourceID}" ${this.iframeOptions}>
		</iframe>`

		return videoembed
	}

	['metacafe'](sourceID) {
		let videoembed = `
		<iframe width="${this.width}" height="${this.height}" 
		src="http://www.metacafe.com/embed/${sourceID}/" 
		${this.iframeOptions}></iframe>`

		return videoembed
	}

	run() {	
		let videoArea = document.querySelector(this.target)

		if(videoArea) {
			videoArea.innerHTML = this['embedParser']()
		} else {
			throw 'Target is not found'
		}
	}

	getEmbedCode() {
		return this['embedParser']()
	}
}