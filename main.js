const availableMP3s = ['meuda.mp3', 'sale.mp3', 'maman-sait-pas.mp3', 'jungle.mp3', 'mauvais.mp3', 'vie-quon-mene.mp3', 'detaille.mp3', 'tenebreux-4.mp3', 'bon-deja.mp3', 'synthese.mp3', 'stevez.mp3', 'la-calle.mp3', 'encore.mp3', 'immonde.mp3', 'lvc.mp3', 'temps.mp3', 'une-autre.mp3', 'silicone.mp3']; // Liste des fichiers MP3 disponibles

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

window.onload = selectSong;
