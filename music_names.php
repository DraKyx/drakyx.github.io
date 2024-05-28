<?php
$dir = './assets';

// Vérifie si le dossier existe et est accessible
if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        // Parcourt chaque fichier dans le dossier
        while (($file = readdir($dh)) !== false) {
            // Exclure les fichiers spéciaux . et ..
            if ($file != "." && $file != "..") {
                echo $file . "<br>";
            }
        }
        closedir($dh);
    }
}
?>