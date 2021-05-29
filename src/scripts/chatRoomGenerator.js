function generateRandomChatId() {
    let roomId = chance.guid();
    return roomId;
}

function createRoom(){

    ROOM_ID = generateRandomChatId();
    firebase.database().ref("messages").child(ROOM_ID+"-messages/meta-data-chat").set({
        "started": true,
        "connected": false
    });
    
}