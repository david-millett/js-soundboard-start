// Caching
const playButtonElements = document.querySelector('#grid-container')

// Functions
playButtonElements.addEventListener("click", (evt) => {
    const audioElement = new Audio(`../sounds/${evt.target.id}.wav`);
    audioElement.volume = .05;
    audioElement.play();
})
