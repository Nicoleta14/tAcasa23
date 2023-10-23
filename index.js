
// item1 = item 2 
const student = {
    name: 'Nicoleta',
    age: 21,
    city: 'Chisinau'
};

const key = 'city';

function verifica(obj, key) {
    return key in obj;
}
const resultat = verifica(student, key)
console.log(resultat)



//item 3
function Vocale(str)  {
    const regex = /[aeiouAEIOU]/g;
    const result = str.match(regex);
    if(result) {
        return result.length;
    }else {
        return 0;
    }
}
const str1 = "Salut, eu sunt NICOLETA";
const nr = Vocale(str1);
console.log(nr)



//item 4
const noteStudenti = {
    Maria: [6, 7, 8],
    Ana: [9, 9, 10],
    Alex: [6, 5, 7],
};

function Studenti(noteStudenti) {
    const result = {};

    for (const numeStudent in noteStudenti) {
        if (noteStudenti.hasOwnProperty(numeStudent)) {
            const note = noteStudenti[numeStudent];
            const media = note.reduce((acc, nota) => acc + nota, 0) / note.length;
            result[numeStudent] = `Medie: ${media.toFixed(2)}`;
        }
    }
    return result;
}

const result = Studenti(noteStudenti);
console.log(result);


//item 5


//item 6
function Palindrom(str) {
    const strCuratat = str.toLowerCase().replace(/[\W_]/g, '');
    const strInversat = strCuratat.split('').reverse().join('');
    return strCuratat === strInversat;
  }
  
  const str = 'sos';
  const result = Palindrom(str);
  console.log(result); 

//item 7

//item 8
const numereExemplu = [2, 3, 9, 6, 1, 8, 4, 5];
function sorteazaNumere(array) {
    const Impare = array.filter(numar => numar % 2 !== 0);
    const Pare = array.filter(numar => numar % 2 === 0);
  
    Impare.sort((a, b) => a - b);
    Pare.sort((a, b) => b - a);
  
    const result = [...Impare, ...Pare];
    return result;
  }
  
  const result = sorteazaNumere(numereExemplu);
  console.log(result);


  
  