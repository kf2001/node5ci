const crypto = require("crypto")

function cifra(plaintext, password) {

    let cifratura = crypto.createCipher('aes-128-cbc', password);
    let cyphertext = cifratura.update(plaintext, 'utf8', 'hex')
    cyphertext += cifratura.final('hex');
    return cyphertext

}

function decifra(cyphertext, password) {
    let decifratura = crypto.createDecipher('aes-128-cbc', password);

    let decyphertext = decifratura.update(cyphertext, 'hex', 'utf8')

    decyphertext += decifratura.final('utf8');

    return decyphertext

}

function lista() {
    return crypto.getCiphers()

}

module.exports = { cifra: cifra, decifra: decifra, listaAlg: lista }