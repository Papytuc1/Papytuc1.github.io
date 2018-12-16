function test() {
    //ON PULL L'ENTREE USER
    var regis = document.querySelector('#text').value;
    /*ici on l'inject dans todolist (+= veux dire j'ajoute l'element precedent au =*/
    //    document.querySelector("#todolist").innerHTML += 
    //    '<li><i class="fas fa-times-circle" onclick="strike(this)"></i>' + regis + '</li>';
    // this represente l'element dans lequel ce trouve l'event
    // il represente le contexte de l'element
    var elLi = document.createElement('li');
    //console.log(elLi)
    var elIcon = document.createElement('i');
    var text = document.createTextNode(regis);
    var atrClik = document.createAttribute("onclick");
    atrClik.value = "strike(this)"; /* on peux le mettre dans la variable idem en dessous*/
    elIcon.classList.add("fas", "fa-times-circle");
    elIcon.setAttributeNode(atrClik);
    elLi.appendChild(elIcon);
    elLi.appendChild(text);
    console.log(elLi)
    document.querySelector("#todolist").appendChild(elLi);

}
//function strike(e){/* e.parentNode repsente le li qui contient l'icone*/
//    console.log(e.parentNode);
//    console.log(document.querySelector('li'));
//    // innerHTML dedans le focus est modifier
//    var contenuLi = e.parentNode.innerText;
//    // querySelector ne renvoie que le premier li qu'il trouve
//   e.parentNode.innerHTML ='<del>'+contenuLi+'</del>';
//    console.log(e.parentNode);
//    console.log(document.querySelector('li'));
//}
function strike(e) { // e vaux i 
    e.classList.toggle("fa-times-circle"); // retire une class
    e.classList.toggle("fa-check"); // ajoute une class
    e.parentNode.classList.toggle("strike"); // ajoute le css
    /*toggle ajoute quand ca n'existe pas et suprime quand ca existe*/
}

function filtre(crit, e) { // crit = recepteur
    if (crit == 'faites') {

        var elList = document.querySelectorAll(".fa-times-circle"); /* est un object qui ce comporte comme un tableau */
        for (let el of elList) {
            el.parentNode.classList.toggle("hidden");
        }
    } else if (crit == 'aFaire') {

        var elList = document.querySelectorAll(".fa-check");
        for (let el of elList) {
            el.parentNode.classList.toggle("hidden");
        }

    } else if (crit == 'voir') {
        var elList = document.querySelectorAll(".fas");
        for (let el of elList) {
            el.parentNode.classList.remove("hidden");
        }
    }

}

function pomodoro() { // fonction super parent
    var self = this;
    var intervalTimer;
    var etat = 0;
    var timer;
    
    this.timer = function (min) {
        //le pomodoro de 25 minutes
        timer = min * 60;
        //fonction anonyme
        //console.log(timer);
        intervalTimer = window.setInterval(function () {
            self.affichage();
            timer--;
            //console.log(timer)
            if (timer == 0) { /* ici j'arrête le timer une foi arriver a 0 **/
                clearInterval(intervalTimer);
                etat++;
                //console.log("fin du timer");
                self.play();

            }
        }, 1000);
    };
    this.play = function () {
        //  lance le timer
        //console.log("début du timer");
        //console.log("etat : " + etat);
        if (etat != 7) {
            switch (etat % 2) { /* ici je fais le modulo de etat, etat/2 il me donne le reste de la division  si etat est pair modulo = 0 si impair modulo= 1 on rentre donc tjrs dans le cas 0 ou 1*/
                case 0:
                    this.timer(25);
                    console.log("travail");
                    break;
                case 1:
                    this.timer(5);
                    console.log("pause");
                    break;
            }
        } else {
            etat = 0; // je envoie  etat à 0
            this.timer(20);
            console.log("grosse pause");

        }
        document.querySelector('#play').disabled=true;
        document.querySelector('#stop').disabled=false;
    };

    this.pause = function () {
        // met en pause le timer
        console.log("on a arrêté la boucle " + timer);
        window.clearInterval(intervalTimer);
        document.querySelector('#pause').hidden=true;
        document.querySelector('#replay').hidden=false;
        
    };

    this.stop = function () {
        // met stop au timer et le reinitialise
        window.clearInterval(intervalTimer);
        timer = 25*60;
        etat = 0;
        self.affichage();
        document.querySelector('#play').disabled=false;
        document.querySelector('#stop').disabled=true;

    };
    this.replay = function () {
        console.log('replay ' + timer + " " + etat);
        this.timer(timer/60); /* je divise par 60 le timer car je le re multiplie dans ma fonction timer , timer est en seconde et je le met en minute ici */
        document.querySelector('#pause').hidden=false;
        document.querySelector('#replay').hidden=true;

    }
    this.affichage = function () {  
        /* first child = ce qui est dans la div minutes/ .node value me permet de recupe la valeur du first child ensuite je lui applique une autre valeur, valeur qui est envoyer a ma fonction zero en dessous pour pouvoir appliquer un '0' quand l'affichage est en dessous de 10*/
        document.querySelector('#minutes').firstChild.nodeValue = zero(Math.floor(timer / 60));
        document.querySelector('#secondes').firstChild.nodeValue = zero(Math.floor(timer % 60));
        /* ici je fait le modulo de timer j'affiche donc le reste de la division*/
    }
    
    function zero(x){
        if (x < 10){
            return '0'+x;
        }
        else{
            return x ;
        }
        
    }
}


var pomodoro = new pomodoro();
