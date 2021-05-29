const { Chance } = require("chance");
import randomItem from 'random-item';
const auth = firebase.auth();

let userY
let userGlobal

const signedInView = document.querySelector('.content');
const signedOutView = document.querySelector('.login__panel');

const signInBtn = document.getElementById('signInBtnGoogle');
const signOutBtn = document.getElementById('signOutBtn');

const userDeatils = document.querySelector('.content__userInfo');

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

import {getActiveUsers} from './getActiveUsers';

auth.onAuthStateChanged( user =>{
    if(user){
        userGlobal = user.uid;
        userDeatils.querySelector('.name').innerHTML = `Hello ${user.displayName}!`;
        userDeatils.querySelector('.uid').innerHTML += `User Id: ${user.uid}`;
        signedOutView.hidden = true;
        signedInView.hidden = false;

        //retreive active users and number of all users
        userY = getActiveUsers();

        userY.then(success =>{

            console.log(success)

        }).catch( error => {

            console.log(error);

        })
        
        firebase.firestore().collection("uids").onSnapshot(  doc =>{
            let activeUsers = new Set();
            let quantity = 0;
            activeUsers.clear();

            doc.forEach( d =>{

                quantity++;
                if(d.data().active && !d.data().busy){
                    activeUsers.add(d.data().uid)
                }

            });

            let usersInfo = {
                activeUsers :activeUsers,
                quantityOfUsers: quantity,
            }     

            console.log(usersInfo);
            return usersInfo;
        })
        

    } else{
        signedInView.hidden = true;
        signedOutView.hidden = false;
    }
})



// function addUser(){
//     const firestore = firebase.firestore();

//     auth.onAuthStateChanged( user =>{

//         if(user){
//             const uids = firestore.collection('uids').doc('uids');
//             uids.add({
//                 uid: user.uid,
//             })
//         }

//     })
// }

//randomly choose chatter uid


// function connection(){

//     //find empty rooms
//     firebase.database().ref("messages").on('value', snapshot =>{
    
//         for(let i = 0 ; i < Object.keys(snapshot.val()).length ; i++){
            
//             let key = Object.keys(snapshot.val())[i];
    
//             if(snapshot.val()[key]['meta-data-chat'].connected == true){
//                 console.log("zajęty");
//             } else {
//                 activeChats.add(key);
//             }
//         }
//         console.log("wolne pokoje: ", activeChats);
//         return activeChats;
//     })

//     connectWithRandom();
//     //connect with random
//     function connectWithRandom() {
//         document.querySelector('.content__box__chat__list').innerHTML = "<p class='temp-msg'><img src='images/loading.gif'/><p>searching...</p></p>";

//         let busied=0;

//         let usersObjectsArray = Array.from(usersObjects);

//         usersObjectsArray.forEach( e =>{
//             if(e.busy == true){
//                 busied++;
//             }
//         })

//         if(busied == usersObjectsArray.length){
//             document.querySelector('.content__box__chat__list').innerHTML += "<p>All users are busy! wait...</p>";
//             return;
//         }

//         let wordsA = [...usersObjectsArray];
//         CHATTER = randomItem(wordsA)

//         if(CHATTER.uid == userGlobal) {
//             connectWithRandom();
//             return;
//         }

//         if(CHATTER.busy == true ){
//             connectWithRandom();
//         } else {
//             console.log(CHATTER)
//             document.querySelector('.content__box__chat__list').innerHTML = "<p>Found it! It's: " + CHATTER.uid + ", say hi!</p>";
//         }


//     }
    
//     //waiting for connection
//     // firebase.database().ref('messages').child(ROOM_ID+"-messages/meta-data-chat").on("value", function (snapshot) {

//     //     if(!snapshot.val().connected){
//     //         console.log("brak użytkownika")
//     //         let mess = "Waiting for chatter...";
//     //         document.querySelector('.content__box__chat__list').innerHTML = mess;
//     //     } else{
//     //         console.log("mamy użytkownika")
//     //         let mess = "Chatter connected";
//     //         document.querySelector('.content__box__chat__list').innerHTML = mess;
//     //     }

//     // });
// }

// function sendAndDisplayMsgs() {

//     //send messages
    
//     function sendMessage(e){
//         e.preventDefault();

//         let user = userGlobal;

//         var starCountRef = firebase.database().ref('messages/' + ROOM_ID + "-messages/meta-data-chat");
//         starCountRef.on('value', (snapshot) => {

//             if(!snapshot.val().connected){
//                 console.log("brak użytkownika anulowano wiadomość");
//                 document.querySelector('.content__box__inputBox__input').value = '';
//                 return;
//             }
//             else{

//                 let message = document.querySelector('.content__box__inputBox__input').value;

//                 if(!message.trim()){
//                     return;
//                 }

//                 firebase.database().ref("messages").child(ROOM_ID+"-messages").push().set({
//                     "sender": user,
//                     "message": message
//                 });
            
//                 document.querySelector('.content__box__inputBox__input').value = '';

//             }

//         });
    
        
//     }

//     //display msgs

//     firebase.database().ref("messages").child(ROOM_ID+"-messages").on("child_added", function (snapshot){

//         if(snapshot.val().started){
//             return;
//         }

//         let showId;
//         snapshot.val().sender != userGlobal ? showId = 'Chatter' : showId = 'You';
//         let className;
//         snapshot.val().sender != userGlobal ? className = 'author' : className = 'respond';

//             let mess = `
//             <li id="message-${snapshot.key}" class="content__box__chat__list__li">
//                 <div class="content__box__chat__list__li__wrapper">
//                     <span class="content__box__chat__list__${className}">${showId}:  </span>
//                     <span> ${snapshot.val().message}</span>
//                 </div>
//             </li>
//             `;


//         document.querySelector('.content__box__chat__list').innerHTML += mess;
//     });
    
//     const form = document.querySelector('form')
//     form.addEventListener('submit', (e) =>{
//         sendMessage(e);
//     })
// }