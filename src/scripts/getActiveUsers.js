export function getActiveUsers() {

    let activeUsers = new Set();
    let users = new Set();
    let quantity = 0;

    return new Promise( (resolve, reject) => {
        let userUid;


//change active status due to logged user or not
        firebase.auth().onAuthStateChanged(function(user) {

            if(user){

                userUid = user.uid;

                activeUsers.clear();
 
                        firebase.firestore().collection("uids").doc(userUid).update({
                            active: true,
                            busy: false,
                            uid: userUid,
                        })

            } else {

                    firebase.firestore().collection("uids").doc(userUid).update({
                        active: false,
                        busy: false,
                        uid: userUid,
                    })
                }

          });

//add user if not exist
        firebase.firestore().collection("uids").onSnapshot(  doc =>{

            activeUsers.clear();

            doc.forEach( d =>{

                quantity++;
                users.add(d.data().uid);
                if(d.data().active && !d.data().busy){
                    activeUsers.add(d.data().uid)
                }

            });


            if(!users.has(userUid)){
                firebase.firestore().collection("uids").doc(userUid).set({
                    active: true,
                    busy: false,
                    uid: userUid,
                });
            }

            let usersInfo = {
                activeUsers :activeUsers,
                quantityOfUsers: quantity,
            }     

            resolve(usersInfo);
        }, reject)

    })
      
    
}

