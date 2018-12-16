//echauffement 1
/*var commentaire = prompt("comment tu t'appelles", "entrée votre nom ici");
var x =0;
var y = 10;
console.log(commentaire.length)
if ( commentaire.length >=x && commentaire.length <=y){
    alert("bonjour");
}
else{
    alert("erreur");
}**/

// echauffement 2
/*let cheval = "blanc";
let nain = 7;
let reponse;
do {
    reponse = prompt("Quelle est  la couleur du cheval blanc d'Henri 4");
}
while(henri != cheval);
alert("Cool");
do {
    reponse = prompt("NB de 7 nains");
}
while(blanche != nain); */
// echauffement 3

/*
let identifiant;
let mdp;
identifiant = prompt("Identifiant");
mdp = prompt("mot de passe");

if (identifiant.length >4 && identifiant.indexOf('@') != -1){
    if(identifiant == "lea@gmail.com" && mdp == "12345"){
        alert('top');
}
    else {
        alert("ok vous n'etes pas lea");
    }
}
**/

//echauffement 4
let random = Math.random();
random = random * 100;
random = Math.floor(random);
let second = Math.floor(Math.random() * 100);
let operateur = Math.floor(Math.random() * 2);
let resultat;
let question;
let texte;
switch (operateur) {
    case 0:
        texte = random + '-' + second
        resultat = random - second;
        break;
    case 1:
        texte = +random + '+' + second;
        resultat = random + second;
        break;
    case 2:
        texte = random + '*' + second
        resultat = random * second;
        break;
}
question = prompt("Combien font " + texte)

if (resultat == question) {
    alert("good");
} else {
    alert("not good");
}
