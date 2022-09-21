function addRoom()
{
    room_name = document.getElementById("room_name").Value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"

    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}


function getdata() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output")}{})}.innerHTML;
room_name = childkey;

console.log("Room Name - "+ room_name);
row = "<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)' >#"+ room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

});});}
getdata();



function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setitem("room_name", name);
    window.location = "kwitter_page.html";
});});}
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    
}


