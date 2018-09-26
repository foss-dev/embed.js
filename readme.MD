# Embed.JS

**Embed.JS simple and dynamic embed helper.**

Embed.JS currently supports these platforms:

	youtube
	facebook
	instagram
	soundcloud
	vimeo
	dailymotion
	metacafe

## Usage

Initialize Embed class and call run method

### Params:

	- el: ID field => // Like: YOUTUBE_ID
	- target: Embed content shown will be in this area
	- source: short name for platforms:
		- yt => youtube
		- dm => dailymotion
		- fb => facebook
		- ins => instagram
		- sc => soundcloud
		- vi => vimeo
		- mc => metacafe
	- event: Optional (default paste (onpaste)). After paste ID, embed content will be show
	- width: Optional: (default: 500)
	- height: Optional (default: 315)

### For Example

```js
var embed = new Embed({
	id: 'wZZ7oFKsKzY',
	target: '.video_container',
	source: 'youtube',
	width: 600,
	height: 600
})

embed.run()
```
