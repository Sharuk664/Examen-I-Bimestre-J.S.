let result=("A  a  B  b  D  d ") ? 'Debajo' :
        'Encima';
let login = prompt("¿inserte una letra (A, B, C, D?");
let message = (login =='A') ? 'Felicidades' :
    (login =='a') ? 'Felicidades' :
    (login == 'B') ? 'Felicidades' :
    (login == 'b') ? 'Felicidades' :
    (login == 'D') ? 'Felicidades' :
    (login == 'd') ? 'Felicidades' :
    (login == 'C') ? 'Error' :
    (login == 'c') ? 'Error' :
        '' ;
     alert(message);
