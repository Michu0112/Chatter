

const startConv = () =>{

    connection();

//find empty rooms
    firebase.database().ref("messages").on('value', snapshot =>{
    
        for(let i = 0 ; i < Object.keys(snapshot.val()).length ; i++){
            
            let key = Object.keys(snapshot.val())[i];
    
            if(snapshot.val()[key]['meta-data-chat'].connected == true){
                console.log("zajęty");
            } else {
                activeChats.add(key);
            }
        }
        console.log("wolne pokoje: ", activeChats);
        return activeChats;
    })

}

const startConvBtn = document.querySelector('.content__userInfo__button');
startConvBtn.addEventListener('click', startConv);

function connection(){

    connectWithRandom();
    //connect with random
    function connectWithRandom() {
        document.querySelector('.content__box__chat__list').innerHTML = "<p class='temp-msg'><img src='images/loading.gif'/><p>searching...</p></p>";

        let busied=0;

        let usersObjectsArray = Array.from(usersObjects);

        usersObjectsArray.forEach( e =>{
            if(e.busy == true){
                busied++;
            }
        })

        if(busied == usersObjectsArray.length){
            document.querySelector('.content__box__chat__list').innerHTML += "<p>All users are busy! wait...</p>";
            return;
        }

        let wordsA = [...usersObjectsArray];
        CHATTER = randomItem(wordsA)

        if(CHATTER.uid == userGlobal) {
            connectWithRandom();
            return;
        }

        if(CHATTER.busy == true ){
            connectWithRandom();
        } else {
            console.log(CHATTER)
            document.querySelector('.content__box__chat__list').innerHTML = "<p>Found it! It's: " + CHATTER.uid + ", say hi!</p>";
        }


    }
    
    //waiting for connection
    // firebase.database().ref('messages').child(ROOM_ID+"-messages/meta-data-chat").on("value", function (snapshot) {

    //     if(!snapshot.val().connected){
    //         console.log("brak użytkownika")
    //         let mess = "Waiting for chatter...";
    //         document.querySelector('.content__box__chat__list').innerHTML = mess;
    //     } else{
    //         console.log("mamy użytkownika")
    //         let mess = "Chatter connected";
    //         document.querySelector('.content__box__chat__list').innerHTML = mess;
    //     }

    // });
}
