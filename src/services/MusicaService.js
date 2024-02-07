const MusicasEnum = require ("../enum/MusicasEnum");

function gerarMusicaAleatoria(){
    return MusicasEnum.getNome(2); 
}

module.exports={
    gerarMusicaAleatoria
}