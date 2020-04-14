const remote = require("electron").remote,
	fs = require("fs"),
	catPic = require("cat-picture"),
	image = require("lightning-image-poly")

const catSrc = catPic.src
catPic.remove()

const viz = new image("#viz", null, [catSrc], {hullAlgorithm: "convex"})

function save () {
	alert("hi1")
	remote..getCurrentWebContents().printToPDF({
		portrait: true
	}, function (err, data) {
		alert("hi")
		fs.writeFile("annotation.pdf", data, (err) => {
			if (err) alert("Error! " + err.message)
			else alert("PDF saved!")
		})
	})
}

window.addEventListener("keydown", (e) => {
	if (e.keyCode == 80) save()
})
