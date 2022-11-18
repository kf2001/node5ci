

const fs=require("fs")
const tools=require("./funzioni")

const lista=tools.listaAlg()

lista.forEach((ll,idx) => {console.log(idx,ll)
  
});

const mypassword="ciao"

const plaintext=fs.readFileSync('plain.txt', 'utf8')


var cyphertext=tools.cifra(plaintext, mypassword)

var decyphertext=tools.decifra(cyphertext, mypassword)

console.log("testo in chiaro")
console.log(plaintext);
console.log("-------")
console.log("testo cifrato")
console.log(cyphertext);
console.log("-------")

console.log("testo decifrato")
console.log(decyphertext);




var piantejson

if (fs.existsSync('piante.txt')) {
  piantejson=fs.readFileSync('piante.txt', 'utf8') 

}
 
  else {
    
    piantejson=fs.readFileSync('piante_mock.json', 'utf8') 

  }
   
 
var piante=JSON.parse(piantejson)

console.log(12,piante.length)

const violacee=piante.filter(function f(p){return p.famiglia.toLowerCase().includes("viol")})

const ordinati=piante.sort(function f(a,b){return a.numero-b.numero })


const salvato=JSON.stringify(violacee)

fs.writeFileSync("piante.txt", salvato,"utf8")









