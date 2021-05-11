const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDeatils = document.querySelector('.userDetails');

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged( user =>{
    if(user){
        userDeatils.innerHTML = `Hello ${user.displayName}!`;
        userDeatils.innerHTML += `User Id: ${user.uid}`;
        whenSignedOut.hidden = true;
        whenSignedIn.hidden = false;
    } else{
        whenSignedOut.hidden = false;
        whenSignedIn.hidden = true;
    }
})