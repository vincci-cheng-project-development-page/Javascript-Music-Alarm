fetch("https://api.napster.com/v2.1/tracks/top?apikey=OGQzZmZkZmMtYzJmNS00MWZhLWE0NTEtY2I5MzNmNTU3OTE5") 
.then (function(response){
    return response.json()})
.then (function(json){
    return myapp(json)})

function myapp(data){

    content = data.tracks
    console.log(content)
    availableTracks = document.getElementById('available-tracks')
    
    //////Iteration for Option Menu for Tracks//////
    for (i=0; i<content.length; i++){
        tracks = document.createElement('li')
        noAction = document.createElement('option')
        noAction.innerText = '-- Select Action --'
        viewOption = document.createElement('option')
        viewOption.innerText = 'Details'
        viewOption.value = `Details`
        addOption = document.createElement('option')
        addOption.innerText = 'Add'
        addOption.value = `Add`
        previewOption = document.createElement('option')
        previewOption.innerText = 'Preview'
        previewOption.value = `Preview`
        viewOrAdd = document.createElement('select')
        viewOrAdd.appendChild(noAction)
        viewOrAdd.appendChild(viewOption)
        viewOrAdd.appendChild(addOption)
        viewOrAdd.appendChild(previewOption)
        viewOrAdd.className = `viewOrAdd`
        tracks.className = i
        tracks.innerText = content[i].name
        availableTracks.appendChild(tracks)
        availableTracks.appendChild(viewOrAdd)
        renderTrack(i, viewOrAdd)
    }    
    viewOrAdd = document.querySelectorAll('.viewOrAdd')
    trackDetails = document.getElementById('track-description')
    currentPlaylist = document.getElementById('current-playlist')
    
    /// Arrays ///
    playlistFiles = []
    audioFiles = []
    
    function renderTrack(num, viewOrAdd){
        viewOrAdd.addEventListener("click", function(){
            if (viewOrAdd.value == 'Details'){
                trackDetails.innerText = 
                `Title: ${content[num].name}
    
                 Album: ${content[num].albumName} 
    
                 Artist: ${content[num].artistName}
    
                 Duration: ${content[num].playbackSeconds} seconds`}
            else if (viewOrAdd.value == 'Add'){
                playlistFiles.push(content[num].previewURL)
                const li = document.createElement('li')
                playlistSong = document.createElement('span')
                playlistSong.innerText = `${content[num].name} ............ `
                removeLast = document.createElement('BUTTON') //View selection
                removeLast.innerText = 'Remove Last Song'
                removeFirst = document.createElement('BUTTON') 
                removeFirst.innerText = 'Remove First Song'
                li.appendChild(playlistSong)
                li.appendChild(removeFirst)
                li.appendChild(removeLast)
                removeFirst.className = 'delete1'
                removeLast.className = 'delete9'
                currentPlaylist.appendChild(li)
                li.class = reviewItems
            }
            else if (viewOrAdd.value == 'Preview'){
                const music_player1 = document.querySelector("audio")
                music_player1.src = content[num].previewURL
        }})
    }
    
    //////Remove From Playlist//////
    currentPlaylist.addEventListener('click', function(e) {
        if(e.target.className === 'delete1'){
            const li = e.target.parentElement;
            currentPlaylist.removeChild(li); 
            playlistFiles.shift()}
        else if(e.target.className === 'delete9'){
            const li = e.target.parentElement;
            currentPlaylist.removeChild(li); 
            playlistFiles.pop()
        }
        
    })
    
    ////// Play Playlist //////
    function playPlaylist() {
        for (key of playlistFiles){
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
                fileIndex++;}
            music_player.src = audioFiles[fileIndex];}
    
            // Start the player
            music_player.src = audioFiles[fileIndex];
            // Listen for the music ended event, to play the next audio file
            music_player.addEventListener('ended', next)
    } 

    ////// Set Alarm //////
    alarmSetForm = document.getElementById('create-task-form')
    const alarmDiv = document.getElementById('alarmDiv')
    alarmInput = document.getElementById('new-task-description')
    resetTimer = document.createElement('BUTTON')
    resetTimer.innerText = 'Reset Alarm'
    alarmSection = document.getElementById('setAlarm')
    alarmSection.appendChild(resetTimer)
   
    alarmSetForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const displayTimeSet = document.getElementById("displayTimeSet")
        var countdownTextbox = document.getElementById("counter")
        alarmDiv.appendChild(countdownTextbox)
        clearTimeout(x);
        countdownTextbox.innerText = alarmInput.value
        displayTimeSet.innerText = `The alarm will sound at ${alarmInput.value}, in...`

    const countDownDate = new Date(alarmInput.value).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
    
        // Get today's date and time
        const now = new Date().getTime();
          
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
          
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Output the result in an element with id="demo"
        document.getElementById("counter").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
          
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("counter").innerHTML = "EXPIRED";
          //console.log('hi')//This works!
          playPlaylist() 
        }
      }, 1000);
resetTimer.addEventListener('click', function(){
    clearInterval(x)
    document.getElementById("counter").innerHTML = "  ";
    displayTimeSet.innerText = `   `
    audioFiles = []
})


    
})
}

    

