const playlistFiles = [];
const audioFiles = []

class Addition {
    createTimestamp() {
        return `${Date.now()}`
    }
    renderAdd(num) {
        playlistSong.innerText = `${content[num].name} ............ `
        removeSong.innerText = 'Remove Song'
        listedItem.appendChild(playlistSong)
        listedItem.appendChild(removeSong)
        const constTimestamp = newAddition.createTimestamp()
        removeSong.value = constTimestamp
        removeSong.className = 'removeSong'
        currentPlaylist.appendChild(listedItem)
        listedItem.class = 'reviewItems'
        return playlistFiles.push(removeSong.value, content[num].previewURL)
    }

    playPlaylist() {
        var music_player = document.querySelector("audio");
        var fileIndex = 0;
        music_player.src = audioFiles[0];
        // function for moving to next audio file
        function next() {
            if (fileIndex === audioFiles.length - 1) {
                fileIndex = 0;
            } else {
                fileIndex++;
            }
            music_player.src = audioFiles[fileIndex];
        }
        // Start the player
        music_player.src = audioFiles[fileIndex];
        // Listen for the music ended event, to play the next audio file
        music_player.addEventListener('ended', next)
    }
}

let newAddition = new Addition();



