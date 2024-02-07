const Enum = require("./Enum");

const musicas = new Enum(
    "DNA", 
    "Fake Love", 
    "Boy With Luv (feat. Halsey)", 
    "Dynamite", 
    "Butter", 
    "Life Goes On", 
    "Permission to Dance", 
    "Mic Drop", 
    "Blood Sweat & Tears", 
    "IDOL", 
    "Spring Day", 
    "Save Me", 
    "I Need U", 
    "Run", 
    "Epilogue: Young Forever", 
    "WINGS", 
    "Love Yourself", 
    "Her", 
    "Tear", 
    "Map of the Soul: Persona"
);

function getNome(valor){
    return musicas.getNome
};

module.exports = {
    musicas, 
    getNome
}