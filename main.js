const availableMP3s = ['encore.mp3', 'immonde.mp3', 'lvc.mp3', 'temps.mp3', 'une-autre.mp3', 'silicone.mp3']; // Liste des fichiers MP3 disponibles

function selectSong() {
    const mp3Select = document.getElementById('mp3Select');

    availableMP3s.forEach(mp3 => {
        const option = document.createElement('option');

        option.value = mp3;
        option.textContent = mp3;

        mp3Select.appendChild(option);
    });
}

function playMP3() {
    var mp3Title = document.getElementById('mp3Select').value;
    var audioSource = document.getElementById('audioSource');
    var audioPlayer = document.getElementById('audioPlayer');
    
    audioSource.src = "assets/" + mp3Title;
    audioPlayer.load();
    audioPlayer.play();
}

function requestGit() {
    fetch(`https://api.github.com/repos/drakyx/drakyx.github.io/contents/assets`, {
        headers: {
            Authorization: `token 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`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

window.onload = selectSong;
