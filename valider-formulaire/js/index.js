var email = document.getElementById("email");
var pwd = document.getElementById("motDePasse");
var bouton = document.getElementById("btnValider");
bouton.addEventListener('click',validerPresence);

//On réinitialiser les bordures des zones de saisie lorsque l'utilisateur clic sur un des deux composants
email.addEventListener('click', reinitialiserComposants);
pwd.addEventListener('click', reinitialiserComposants);
function validerPresence(){
	/*
	  La fonction renvoie true si les données du formulaire sont valides. Pour cette version, 
	  la validitié est limité à la saisie obligatoire de l'identifiant et du mot de passe.
	*/
	
	var emailValide = true;
	var pwdValide = true;
	if(email.value.trim().length == 0){
	  email.style.borderColor = 'red';
	  //Todo : afficher un message d'erreur à côté de la zone de saisie du courriel
	  emailValide = false;
	}  
    if(pwd.value.trim().length == 0){	
	  pwd.style.borderColor = 'red';
	  //Todo : afficher un message d'erreur à côté de la zone de saisie du mot de passe
	  pwdValide = false;
	}
	
	/*
	  La fonction renvoie la conjonction (AND) des deux sentinelles emailValide et pwdValide
	*/
    return emailValide && pwdValide;
}
function reinitialiserComposants(){
	email.style.borderColor = "black";
	pwd.style.borderColor = "black";
}