//on crée la fonction pour coloré les cases
function handleClickColor(event) {

    //on recupere la couleur selectionner
    selectedColor = document.querySelector('input[name="color"]:checked').value;

    //on verifie la couleur deja afficher et on modifie
    if (event.target.style.background !== selectedColor) {
        event.target.style.background = selectedColor;
    } else if (event.target.style.background == selectedColor) {
        event.target.style.background = "lightgray";
    }
}

//fonction pour récuperer les valeurs du board et pixel
function valueSizeBoard() {
        //on récupere la valeur de la taille du board choisi
        var sizeBoardValue = document.querySelector("#boardFormat").value;
        console.log(sizeBoardValue);
        //on recupere la valeur de la taille des pixels
        var sizePixelValue = document.querySelector("#pixelFormat").value;
        console.log(sizePixelValue);

    modifierSizeBoard(sizeBoardValue, sizePixelValue);
}

//creation et modification des pixels en fonction de ce qui a été choisi par l'utilisateur
function modifierSizeBoard(sizeBoard = 200, sizePixel = 10) {

    //on modifie la taille de la div parent
        var sizeDivBoard = document.querySelector(".main-page__boardDraw");
        sizeDivBoard.style.width = sizeBoard + "px";
        sizeDivBoard.style.height = sizeBoard + "px";
    
    //on supprime tous les enfants de la div parent
    var parentBoardElement = document.querySelector(".main-page__boardDraw");
    while (parentBoardElement.firstChild) {
        parentBoardElement.removeChild(parentBoardElement.firstChild);
    }

    //on determine le nombre de pixel necessaire
    var numberPixel = Math.pow((sizeBoard/sizePixel),2);

    //on ajoute une boucle pour en creer plusieurs (100)
    for (var i = 0; i < numberPixel; i++) {
        //on cree les div pixel
        var newDivElement = document.createElement("div");
        //on lui donne une classe
        newDivElement.classList.add("pixel");

        //on modifie la taille de l'element
        newDivElement.style.width = sizePixel + "px";
        newDivElement.style.height = sizePixel + "px";

        //on appel le parent
        var parentDivElement = document.querySelector(".main-page__boardDraw");

        //on lui fait adopter l'enfant
        parentDivElement.appendChild(newDivElement);
    }

    //on affiche le bouton erase
    var buttonEraseElement = document.querySelector("#erase");
    buttonEraseElement.style.display = "initial";
}

//on cree la fonction pour effacer la grille
function handleButtonErase() {
    var divPixelElement = document.querySelectorAll(".pixel");
    Array.prototype.filter.call(divPixelElement, function(divPixelElement) {divPixelElement.style.backgroundColor = "lightgray";});
    
}

//on cree un suivi d'evenement pour changer les couleurs des pixels
var divElementPixel = document.querySelector(".main-page__boardDraw");
divElementPixel.addEventListener("click", handleClickColor);

//on cree un suivi d'evenement pour changer la taille de la grille
var buttonSubmitElement = document.querySelector("#submitButton");
buttonSubmitElement.addEventListener("click", valueSizeBoard);

//on cree un suivi d'évenement pour le bouton erase
var eraseButtonElement = document.querySelector("#erase");
eraseButtonElement.addEventListener("click", handleButtonErase);