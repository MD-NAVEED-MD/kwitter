function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) {document.getElementById("output")})}
firebase_message_id = childkey;
message_data = childData;

function getData() { firebase.Data().ref("/"+room_name).on('value', function(snapshot) {document.getElementById("output")})}
firebase_message_id = childKey;
message_data = childData;

//Start code

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"<img class="user_tick" src="https://image.shutterstock.com/image-vector/blue-check-mark-icon-vector-260nw-1726901125.jpg"></h4>";
message_with_tag ="<h4 class='message_h4>'""
