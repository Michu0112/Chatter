
const auth = firebase.auth();

let userGlobal;

const signedInView = document.querySelector('.content');
const signedOutView = document.querySelector('.login__panel');

const signInBtn = document.getElementById('signInBtnGoogle');
const signOutBtn = document.getElementById('signOutBtn');

const userDeatils = document.querySelector('.content__userInfo');

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged( user =>{
    if(user){
        userGlobal = user.uid;
        console.log(userGlobal);
        userDeatils.querySelector('.name').innerHTML = `Hello ${user.displayName}!`;
        userDeatils.querySelector('.uid').innerHTML += `User Id: ${user.uid}`;
        signedOutView.hidden = true;
        signedInView.hidden = false;
    } else{
        signedInView.hidden = true;
        signedOutView.hidden = false;
    }
})

//prevent default

function sendMessage(e){
    e.preventDefault();

    let user = userGlobal;

    let message = document.querySelector('.content__box__inputBox__input').value;

    firebase.database().ref("messages").push().set({
        "sender": user,
        "message": message
    });
}

const form = document.querySelector('form')
form.addEventListener('submit', (e) =>{
    sendMessage(e);
})