const path = require("path") // permet de créer des chemins absolus à partir des chemins relatifs car webpack attend à certains endroits des chemins absolus
module.exports = {
    watch: true,
    entry: "./src/index.js", // dit à webpack le point d'entrée de notre projet
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js" // dit à webpack le nom du fichier produit
    },
    devtool: "source-map", // permet de faire correspondre les numéros lignes des infos affichées dans la console à notre code source au lieu du fichier bundle.js, plus pratique pour débugguer donc
    devServer: {
        contentBase: path.resolve(__dirname, "build"), // dit au serveur de nous servir ce qu'il y a dans le dossier dist au lieu de la racine du projet
        open: true // lance le navigateur automatiquement au lancement du serveur, ce qui évite de mettre --open dans la tâche
    }
}