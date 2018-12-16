let operateur = '';
operateur = prompt("Choisir opérateur + - *");
let nb1;
nb1 = prompt("Choisir votre premier chiffre");
let nb2;
nb2 = prompt("Choisir votre second chiffre");
let resultat;
switch(operateur){
    case '+':
        resultat = parseInt(nb1)+parseInt(nb2);
        alert(resultat);
        break;
    case '-':
        resultat = nb1 - nb2;
        alert(resultat);
        break;
    case '*':
        resultat = nb1 * nb2;
        alert(resultat);
        break;
    default :
        alert("Saise incorrect");
}