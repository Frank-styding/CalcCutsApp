const WEBSOCKET_ADDRESS = "ws://127.0.0.1:8003";

let socket;
let message;

function ConectWithServer(){
   socket = new WebSocket("ws://127.0.0.1:8003");

   socket.addEventListener("open",()=>{
       console.log("The conection Established with websocket server");
   })
}

function send(message){
    socket.send(message);
}

function response(){
    
}