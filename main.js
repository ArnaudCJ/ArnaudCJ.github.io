let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


/* Test de détection de la valeur de la variable 'myName' */
if(!localStorage.getItem('name')) {
  setUserName();
} else {let storedName = localStorage.getItem('name');
myHeading.textContent = storedName + ', Bienvenue sur mon profil GitHub !';
}

/* Déclenchement de la demande du prénom si le test retourne 'false' + stockage dans le navigateur */
function setUserName() {
  let myName = prompt('Bonjour ! Quel est votre prénom ?')
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + ', Bienvenue sur mon profil GitHub !';
}

/* Mise en place de l'event ".onclick" sur la variable myButton attachée au bouton dans le html pour déclencher la fonction "setUserName"  */
myButton.onclick = function () {
    setUserName();
}
