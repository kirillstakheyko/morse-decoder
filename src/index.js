const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result ='';
    for (let i = 0; i < expr.length / 10; i++){
      let letter = expr.substr(i * 10, 10);
      if(letter === "**********") {
        result += ' ';
      } else{
        letter = letter - 0 + '';
        let subResult = '';
        for (let x = 0; x < letter.length / 2; x++){
          if(letter.substr(x *2 , 2) === '10'){
            subResult += '.';
          } else{
            subResult += '-';
          }
        }
        result += MORSE_TABLE[subResult];
      }
    }
    return result;
  }

module.exports = {
    decode
}