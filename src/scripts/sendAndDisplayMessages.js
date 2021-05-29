
function sendAndDisplayMsgs() {

    //send messages
    
    function sendMessage(e){
        e.preventDefault();

        let user = userGlobal;

        var starCountRef = firebase.database().ref('messages/' + ROOM_ID + "-messages/meta-data-chat");
        starCountRef.on('value', (snapshot) => {

            if(!snapshot.val().connected){
                console.log("brak użytkownika anulowano wiadomość");
                document.querySelector('.content__box__inputBox__input').value = '';
                return;
            }
            else{

                let message = document.querySelector('.content__box__inputBox__input').value;

                if(!message.trim()){
                    return;
                }

                firebase.database().ref("messages").child(ROOM_ID+"-messages").push().set({
                    "sender": user,
                    "message": message
                });
            
                document.querySelector('.content__box__inputBox__input').value = '';

            }

        });
    
        
    }

    //display msgs

    firebase.database().ref("messages").child(ROOM_ID+"-messages").on("child_added", function (snapshot){

        if(snapshot.val().started){
            return;
        }

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
    
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) =>{
        sendMessage(e);
    })
}