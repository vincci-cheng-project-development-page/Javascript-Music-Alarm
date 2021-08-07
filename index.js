fetch("https://api.napster.com/v2.1/tracks/top?apikey=OGQzZmZkZmMtYzJmNS00MWZhLWE0NTEtY2I5MzNmNTU3OTE5")
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        return myapp(json)
    })

function myapp(data) {

    content = data.tracks
    console.log(content)
    availableTracks = document.getElementById('available-tracks')
    trackDetails = document.getElementById('track-description')
    currentPlaylist = document.getElementById('current-playlist')


    for (i = 0; i < content.length; i++) {
        tracks = document.createElement('li')
        detailsButton = document.createElement('BUTTON')
        detailsButton.innerText = 'Details'
        detailsButton.value = `Details`
        addButton = document.createElement('BUTTON')
        addButton.innerText = 'Add'
        addButton.value = `Add`
        previewButton = document.createElement('BUTTON')
        previewButton.innerText = 'Preview'
        previewButton.value = `Preview`
        tracks.className = i
        tracks.innerText = content[i].name
        availableTracks.appendChild(tracks)
        availableTracks.appendChild(detailsButton)
        availableTracks.appendChild(addButton)
        availableTracks.appendChild(previewButton)
        renderTrack(i)}
    
    function renderTrack(num){
        for (num of content) {
        detailsButton.addEventListener("click", function(num){
                    trackDetails.innerText = num.name}
               /*  `Title: ${content[i].name}
    
                 Album: ${content[i].albumName} 
               
                 Artist: ${content[i].artistName}
    
                Duration (when you buy the Full Song): ${content[i].playbackSeconds} seconds` */
    )}}}
/*
    function renderTrack(num){

            else if (e.target.value == 'Add') {
                newAddition.renderAdd()
            }
            if (e.target.value == 'Preview') {
                console.log(e.target.value)
                const music_player1 = document.querySelector("audio")
                music_player1.src = content[num].previewURL
            }
        }
    })}
    
    /* 
    currentPlaylist.addEventListener('click', function (e) {
        if (e.target.innerText === 'Remove Song') {
            renderTrack(num)
        }
    })
    
    alarmSetForm = document.getElementById('create-task-form')
    alarmDiv = document.getElementById('alarmDiv')
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



    }
        })


If the count down is over, write some text 
if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
    //console.log('hi')//This works!
    playPlaylist()
}
    }, 1000);
resetTimer.addEventListener('click', function () {
    clearInterval(x)
    document.getElementById("counter").innerHTML = "  ";
    displayTimeSet.innerText = `   `
    audioFiles = []
})
}

*/

