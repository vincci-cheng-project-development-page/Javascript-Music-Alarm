if (e.target.value == 'Add') {
    Addition()
    }


    playlistFiles = []
    audioFiles = []
    //timestamp = `${Date.now()}`

class Addition{
        constructor(someTime){
            this.someTime = someTime
        }
    renderAdd(){
        playlistFiles.push(timestamp)
    playlistFiles.push(content[num].previewURL)
    const li = document.createElement('li')
    playlistSong = document.createElement('span')
    playlistSong.innerText = `${content[num].name} ............ `
    removeSong = document.createElement('BUTTON') //View selection
    removeSong.innerText = 'Remove Song'
    li.appendChild(playlistSong)
    li.appendChild(removeSong)
    removeSong.className = `${someTime}`
    currentPlaylist.appendChild(li)
    li.class = reviewItems}
}

newAddition = new Addition(`${Date.now()}`)
// newAddition.renderAdd()
/* Addition {
    constructor()
    static renderAdd()
} */
// let newAddition = Addition.renderAdd(`${Date.now()}`)
// newAddition 
/* Addition {
    constructor()
    get renderAdd()
} */
// let newAddition = new Addition(`${Date.now()}`)
// newAddition.someTime = `${Date.now()}` //This is some new time
// newAddition.renderAdd //This modifies the argument so it is a new time
// newAddition.someTime = `${Date.now()}` //This is some new time
// newAddition.renderAdd //This modifies render add so the argument is some other time


class Remove extends newAddition{
/*     constructor(){
        super()} *///super.renderAdd() extends the original information


            const li = e.target.parentElement;
            currentPlaylist.removeChild(li);
            for (i = 0; i < playlistFiles.length; i++) {
                if (playlistFiles[i] == e.target.className) {
                    playlistFiles.splice(i, 2)
                }
}

class PlayPlaylist extends Add{
    constructor(){

    playPlaylist() {
        for (key of playlistFiles) {
            audioFiles.push(key)
        }
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
}}


/* const playlistFiles = ["Banana", "Orange", "Apple", "Mango"];
                                for (i=0; i<playlistFiles.length; i++){
                                if (playlistFiles[i] == removeSong.className){
                                playlistFiles.splice(i,2)}}
                                 */