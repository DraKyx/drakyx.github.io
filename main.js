const availableMP3s = ["haine-sex", "batiment", "rr-9.1", "daddy-chocolat", "todd-boy", "danse-roro", "apero-vinzou", 'meuda', 'sale', 'maman-sait-pas', 'jungle', 'mauvais', 'vie-quon-mene', 'detaille', 'tenebreux-4', 'bon-deja', 'synthese', 'stevez', 'la-calle', 'encore', 'immonde', 'lvc', 'temps', 'une-autre', 'silicone']; // Liste des fichiers MP3 disponibles

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
    
    audioSource.src = "assets/" + mp3Title + ".mp3";
    audioPlayer.load();
    audioPlayer.play();
}

function playNextSong() {
    const mp3Select = document.getElementById('mp3Select');

    if (mp3Select.selectedIndex < mp3Select.options.length - 1) {
        mp3Select.selectedIndex += 1;

    } else {
        mp3Select.selectedIndex = 0; // Recommence depuis le début si la liste est terminée
    }
    playMP3();
}

window.onload = function() {
    selectSong();
    
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.addEventListener('ended', playNextSong);
};
