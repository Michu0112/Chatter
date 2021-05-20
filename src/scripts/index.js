const { Chance } = require("chance");
import randomItem from 'random-item';


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
        userDeatils.querySelector('.name').innerHTML = `Hello ${user.displayName}!`;
        userDeatils.querySelector('.uid').innerHTML += `User Id: ${user.uid}`;
        signedOutView.hidden = true;
        signedInView.hidden = false;

        //add user to firestore uid set
        getUsers();
        addUser();

    } else{
        signedInView.hidden = true;
        signedOutView.hidden = false;
    }
})

function getUsers() {
    const firestore = firebase.firestore();
        firestore.settings({timestampsInSnapshots: true});

        const col = firestore.collection('uids');

        const query = col;

        query.get().then(snapshot =>{
            snapshot.docs.forEach(doc =>{
                console.log(doc.data().uid)
            })
        })
}

function addUser(){
    const firestore = firebase.firestore();

    auth.onAuthStateChanged( user =>{

        if(user){
            const uids = firestore.collection('uids').doc('uids');
            uids.add({
                uid: user.uid,
            })
        }

    })
}

//generate random Id for chat room

function generateRandomChatId() {
    return chance.guid();
}

console.log(generateRandomChatId());

//randomly choose chatter uid

function generateRandomChatterUid() {

    let wordsA = ['apple','green','banana','peach'];
    return randomItem(wordsA);
}

console.log(generateRandomChatterUid());

//prevent default

function sendMessage(e){
    e.preventDefault();

    let user = userGlobal;

    let message = document.querySelector('.content__box__inputBox__input').value;

    firebase.database().ref("messages").push().set({
        "sender": user,
        "message": message
    });

    document.querySelector('.content__box__inputBox__input').value = '';
}

const form = document.querySelector('form')
form.addEventListener('submit', (e) =>{
    sendMessage(e);
})

//display msgs

firebase.database().ref("messages").on("child_added", function (snapshot){

    let showId;
    snapshot.val().sender != userGlobal ? showId = 'Chatter' : showId = 'You';
    let className;
    snapshot.val().sender != userGlobal ? className = 'author' : className = 'respond';

        let mess = `
        <li id="message-${snapshot.key}" class="content__box__chat__list__li">
            <div class="content__box__chat__list__li__wrapper">
                <span class="content__box__chat__list__${className}">${showId}:  </span>
                <span> ${snapshot.val().message}</span>
            </div>
        </li>
        `;


    document.querySelector('.content__box__chat__list').innerHTML += mess;
});

