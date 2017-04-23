var parseSource = Symbol("parseSource")
var embedParser = Symbol("embedParser")
var doembed = Symbol("doembed")
var youtube = Symbol("youtube")
var facebook = Symbol("facebook")
var instagram = Symbol("instagram")
var soundcloud = Symbol("soundcloud")
var vimeo = Symbol("vimeo")
var dailymotion = Symbol("dailymotion")
var metacafe = Symbol("metacafe")

class Embed {
	constructor (data) {
		this.el = data.el
		this.target = data.target
		this.source = data.source
		this.event  = (!data.event) ? 'paste' : data.event
		this.width = (!data.width) ? 500 : data.width
		this.height = (!data.height) ? 315 : data.height
		this.code = ''
	}

	[parseSource]() {
		let extractSource = this.source
		return extractSource
	}

	[embedParser]() {
		let embeddedCode = ""
		let parsedSource = this[parseSource]()
		let sourceID = document.querySelector(this.el).value

		switch(parsedSource) {
			case "yt":
				embeddedCode = this[youtube](sourceID)
				break;
			case 'dm':
				embeddedCode = this[dailymotion](sourceID)
				break;
			case 'fb':
				embeddedCode = this[facebook](sourceID)
				break;
			case 'ins':
				embeddedCode = this[instagram](sourceID)
				break;
			case 'sc':
				embeddedCode = this[soundcloud](sourceID)
				break;
			case 'vi':
				embeddedCode = this[vimeo](sourceID)
				break;
			case 'mc':
				embeddedCode = this[metacafe](sourceID)
				break;

		}
		
		return embeddedCode
	}

	[youtube](sourceID) {
		let videoembed = `
			<iframe width="${this.width}" height="${this.height}" 
			src="https://www.youtube.com/embed/${sourceID}?ecver=1" 
			frameborder="0" allowfullscreen></iframe>`

		
		return videoembed
	}

	[facebook](sourceID) {
		let videoembed = `
			<iframe src="http://www.facebook.com/video/embed?video_id=${sourceID}" 
			frameborder="0" width="${this.width}" height="${this.height}" allowfullscreen>`

		
		return videoembed
	}

	[instagram](sourceID) {
		let videoembed = `
			<iframe 
			width="${this.width}" 
			height="${this.height}" 
			src="http://instagram.com/p/${sourceID}/embed" 
			frameborder="0"></iframe>`

		
		return videoembed
	}

	[soundcloud](sourceID) {
		let videoembed = `
			<iframe 
			width="${this.width}" 
			height="${this.height}" 
			scrolling="no" 
			frameborder="no" 
			src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${sourceID}
			&amp;auto_play=false&amp;hide_related=false&amp;
			show_comments=true&amp;show_user=
			true&amp;show_reposts=false&amp;visual=true"></iframe>`

		
		return videoembed
	}

	[vimeo](sourceID) {
		let videoembed = `
			<iframe 
			src="https://player.vimeo.com/video/${sourceID}?title=0&byline=0&portrait=0" 
			width="${this.width}" 
			height="${this.height}" 
			frameborder="0" 
			webkitallowfullscreen 
			mozallowfullscreen 
			allowfullscreen></iframe>`

		
		return videoembed
	}

	[dailymotion](sourceID) {
		let videoembed = `
		<iframe frameborder="0" width="${this.width}" height="${this.height}" 
		src="//www.dailymotion.com/embed/video/${sourceID}" allowfullscreen>
		</iframe>
		`

		return videoembed
	}

	[metacafe](sourceID) {
		let videoembed = `
		<iframe width="${this.width}" height="${this.height}" 
		src="http://www.metacafe.com/embed/${sourceID}/" 
		frameborder="0" allowfullscreen></iframe>
		`

		return videoembed
	}

	[doembed]() {
		
		return this[embedParser]()
	}

	run () {
		let handler = this


		let videoArea = document.querySelector(this.target)
		let sourceArea = document.querySelector(this.el)
		


		sourceArea.addEventListener(this.event, function() {
			setTimeout(function() {
				handler.code = handler[doembed]()
				videoArea.innerHTML = handler.code
			}, 150)
		}, false)
	}
}