

const fs=require("fs")
const crypto=require("crypto")
let a=5
let b=10

function letto(dati){

console.log(2,dati)

}

console.log(1,"Ciao a tutti! ", a*b)


/*fs.writeFileSync("./data.txt", "ciao a tutti", "UTF8")
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(1,data)
    letto(data);
  });

console.log(3,"dopo")*/

const mypassword="ciao"

const plaintext=fs.readFileSync('plain.txt', 'utf8') 

//const plaintext="frase da cifrare"

var cifratura = crypto.createCipher('aes-128-cbc', mypassword);
var cyphertext = cifratura.update(plaintext, 'utf8', 'hex')
cyphertext += cifratura.final('hex');

var decifratura= crypto.createDecipher('aes-128-cbc', mypassword);

var decyphertext = decifratura.update(cyphertext, 'hex', 'utf8')

decyphertext +=decifratura.final('utf8');


console.log(10,cyphertext);


console.log(20,decyphertext);

const lista=crypto.getCiphers()

lista.forEach((ll,idx) => {console.log(idx,ll)
  
});


var piantejson

if (fs.existsSync('piante.txt')) {
  piantejson=fs.readFileSync('piante.txt', 'utf8') 

}
 

  else{
    
    piantejson=fs.readFileSync('piante_mock.json', 'utf8') 

  }
   
 

var piante=JSON.parse(piantejson)

console.log(12,piante.length)

const violacee=piante.filter(function f(p){return p.famiglia.toLowerCase().includes("viol")})

const ordinati=piante.sort(function f(a,b){return a.numero-b.numero })



const salvato=JSON.stringify(violacee)

fs.writeFileSync("piante.txt", salvato,"utf8")









