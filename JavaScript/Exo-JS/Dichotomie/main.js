let random = Math.random();
random = random*9;
random = Math.floor(random);
let nb1;
do {
    nb1= prompt("Choisir un chiffre entre 0 et 9");

if (random < nb1){
    alert("inferieur");
if(random > nb1){
    alert("Superieur");
}    
}
    
else {
    alert("Vous avez trouvez");
}
}
while(random != nb1);
