/**
 * This JavaScript code defines a function playSound that plays an audio element
 * corresponding to a key press event. It also adds a visual effect to the key that
 * was pressed. The removeTransition function is used to remove the visual effect
 * once the transition ends. An event listener is added to the window to trigger
 * the playSound function when a key is pressed.
 */
function playSound(e) {
	let { keyCode } = e;
	let selectedAudio = document.querySelector(`audio[data-key="${keyCode}"]`);
	let selectedKey = document.querySelector(`.key[data-key="${keyCode}"]`);

	if (!selectedAudio) return;

	selectedAudio.currentTime = 0; // rewind to start
	selectedAudio.play();
	selectedKey.classList.add("playing");

	let allKeys = document.querySelectorAll(".key");
	allKeys.forEach(function (key) {
		key.addEventListener("transitionend", removeTransition);
	});
}

function removeTransition(e) {
	if (e.propertyName !== "transform") return;
	this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
